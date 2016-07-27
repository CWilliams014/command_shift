const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nurseCtrl = require('./Nurse/nurseCtrl');
const bedCtrl = require('./Bed/bedCtrl');
const cookieCtrl = require('./Cookie/cookieCtrl');
const sessionCtrl = require('./Session/sessionCtrl');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Build', 'admin.html'));
});

app.get('/shift', (req, res) => {
  res.sendFile(path.join(__dirname, '../Build', 'nurse.html'));
});

app.delete('/nurse', nurseCtrl.remove);
app.get('/nurses', nurseCtrl.index);
app.post('/nurse', nurseCtrl.add);
// app.post('/changeBed', bedCtrl.changeBed, nurseCtrl.changeBed);
app.get('/emptyBeds', bedCtrl.getEmptyBeds, (req, res) => {
  res.send(req.body.emptyBeds);
});
app.get('/occupiedBeds', bedCtrl.getOccupiedBeds, (req, res) => {
  res.send(req.body.occupied);
});
app.post('/note', bedCtrl.addNote);
app.post('/addBeds', bedCtrl.addBeds);
app.post('/emptyBeds', bedCtrl.emptyBeds);
app.post('/assign', bedCtrl.getOccupiedBeds, bedCtrl.assign, nurseCtrl.sendAssignment);
app.post('/populate', bedCtrl.populate);
app.post('/getAssignments',
  nurseCtrl.verifyNurse,
  cookieCtrl.setCookie,
  sessionCtrl.startSession,
  nurseCtrl.postAssignments
  // (req, res) => {
  // 	res.json([{bed:'1', notes: "He's a pirate"},{bed:'2', notes: null},{bed:'3', notes: "Check in every hour"}]);
  // }
  );
app.post('/clear', nurseCtrl.clearAssignments);
app.get('/getAssignments',
	// sessionCtrl.isLoggedIn,
	// nurseCtrl.postAssignments
	(req, res) => {
  	  res.json([{bed:'4', notes: "He's a pirate"},{bed:'5', notes: null},{bed:'6', notes: "Check in every hour"}]);
  }
	);

app.listen(3000, () => {
  console.log('Express listening on port 3000');
});

module.exports = app;
