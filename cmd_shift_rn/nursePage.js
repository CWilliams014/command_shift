import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native';

class NursePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			nurseData : {}
		};
		this.fetchNurses = this.fetchNurses.bind(this);
	}

	componentDidMount(){
		// this.setState({nurseData: this.fetchNurses()});
	}

	fetchNurses(){
		var names = this.props.nurseName.split(' ');
		var nurseFirst = names[0];
		var nurseLast = names[1];
		fetch('http://localhost:3000/nurses').then(function(err, data){
				data.filter(function(nurse){
					return nurse.first === nurseFirst && nurse.last === nurseLast;
				});
				console.log(data)
				this.setState({nurseData:data})
		});
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome {this.props.nurseName}!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

module.exports = NursePage;
