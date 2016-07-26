import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

class NamePage extends Component {
		constructor(props){
		super(props);
		this.state = {
			text: ''
		};
	}

	onButtonPress(){
		console.log('FML')
		this.props.navigator.push({
			id: 'NursePage',
			passProps: {
				nurseName: this.state.text
			}
		});
	}

	render() {
		return (
			<ResponsiveImage source={require('./doctor_bg.jpg')} style={styles.container} initWidth='420'>
				<Text style={styles.welcome}>
						Nurse of Ivy Creek Medical Center! {'\n'} Please enter your Name! 
				</Text>
				<TextInput 
					style={styles.textBox} 
					onChangeText= {(text) => this.setState({text})}
					value= {this.state.text}
				/>
				<View style={{flex: 1}}>
					<TouchableHighlight 
						onPress={this.onButtonPress.bind(this)}
						style={styles.instructions}>
							<Text
								style={styles.buttonText}>Pick me like a booger
							</Text>
					</TouchableHighlight>
				</View>
				<View style={{flex: 3}}>
				</View>
			</ResponsiveImage>
		);
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
		alignItems: 'center',
		textAlign: 'center'
	}
});

module.exports = NamePage;
