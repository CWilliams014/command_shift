import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableHighlight
} from 'react-native';

import NursePage from './nursePage.js'
import NamePage from './namePage.js'

class cmd_shift_rn extends Component {
	render(){
		return(
			<Navigator
				initialRoute = {{
					id: 'NamePage'
				}}
				renderScene = {
					this.navigatorRenderScene
				}
			/>
		)
	}

	navigatorRenderScene(route, navigator){
		_navigator = navigator;
		switch(route.id){
			case 'NamePage':
				return(<NamePage navigator={navigator} {...route.passProps} title="NamePage"/>);
			case 'NursePage':
				return(<NursePage navigator={navigator} {...route.passProps} title="NursePage"/>)
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
		flex: 1,
		marginTop: 100,
		justifyContent: 'flex-end',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#00d6f7',
		fontWeight: '700',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	instructions: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: 30,
		height: 40,
		width: 80,
		backgroundColor: '#2139ef',
		borderRadius: 100,
		justifyContent: 'center'
	},
	buttonText: {
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#bac1ef',
		fontWeight: '700'
	},
	textBox: {
		backgroundColor: '#b7e3f4',
		height: 50,
		width: 414,
		fontSize: 20,
		borderRadius: 10,
		alignItems: 'center'
	}
});

AppRegistry.registerComponent('cmd_shift_rn', () => cmd_shift_rn);
