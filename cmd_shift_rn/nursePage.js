import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

class NursePage extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
		this.chooseColor = this.chooseColor.bind(this)
	}

	navigateBack(){
		this.props.navigator.pop();
	}


	chooseColor(bedNum){
		return {
		height: 30,
		width: 100,
		backgroundColor: this.props.nurseData[bedNum].bgColor,
		borderRadius: 15,
		borderWidth: 2,
		borderColor: '#3a0101',
		margin: 5
		}
	}

	navigateNotes(bedNum){
		// console.log(event)
		this.props.navigator.push({
			id: 'NotesPage',
			passProps: {
				bedNum: bedNum,
				note: this.props.nurseData[bedNum].note,
				updateNote: this.props.updateNote,
				updateColor: this.props.updateColor
			}
		})
	}

	render(){
		var names = this.props.nurseName.split(' ');
		var nurseFirst = names[0];
		var nurseLast = names[1];
		nurseFirst[0] = nurseFirst[0].toUpperCase();
		nurseLast[0] = nurseLast[0].toUpperCase();

		var nurseArr = Object.keys(this.props.nurseData)
		var bedData = nurseArr.map((bedNum, i) =>{
			return (
			<TouchableHighlight style={this.chooseColor(bedNum)}
				key={bedNum} 
				onPress={() => this.navigateNotes(bedNum)}>
					<Text style={styles.bedButtonText}>
					{bedNum}
					</Text>
			</TouchableHighlight>
			)
		});
		return (
			<ResponsiveImage source={require('./Images/doctor_bg2.jpg')} style={styles.container}>
				<View style ={styles.viewBackButton}>
					<TouchableHighlight onPress={this.navigateBack.bind(this)} style={styles.backButton}>
						<Image source={require('./Images/logout.png')} style={styles.backImage}></Image>
					</TouchableHighlight>
				</View>
				<View style={styles.viewTop}>
					<Text style={styles.welcome}>
						Welcome {nurseFirst} {nurseLast}!
					</Text>
					<Text style={styles.displayNames}>
						Your beds are: 
					</Text>
				</View>
				<View style ={styles.viewBottom}>
						{bedData}
				</View>

			</ResponsiveImage>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	welcome: {
		fontSize: 32,
		textAlign: 'center',
		margin: 10,
		fontFamily: 'Cochin',
		color: '#79ace0',
		fontWeight: '700',
		marginLeft: 20
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		marginLeft: 20
	},
	displayNames: {
		fontSize: 20,
		color: '#79ace0',
		fontWeight: '700',
		marginLeft: 20
	},
	viewBackButton: {
		flex: 1,
		alignItems: 'flex-start',
	},
	viewTop: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	viewBottom: {
		flex: 8,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 10,
		marginLeft: 20
	},
	backImage: {
		height: 40,
		width: 60,
		borderRadius: 10
	},
	backButton: {
		marginTop: 20,
		marginLeft: 10
	},
	bedButtonText: {
		textAlign: 'center',
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0)',
		fontWeight: '700',
		fontSize: 18,
		fontFamily: 'Verdana'
	}
});

module.exports = NursePage;
