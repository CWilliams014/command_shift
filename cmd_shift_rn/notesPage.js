import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image,
	TextInput
} from 'react-native';

class NotesPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		};
	}

	navigateBack(){
		this.props.updateNote(this.props.bedNum, this.state.text)
		this.props.navigator.pop();
	}

	navigateCheck(){
		this.props.updateNote(this.props.bedNum, this.state.text)
		this.props.updateColor(this.props.bedNum);
		this.props.navigator.pop();
	}

	componentDidMount() {
	 this.setState({text: this.props.note})
	}

	render(){

		return (
			<View style={styles.container}>
				<View style ={styles.viewPlaceholder}>
					<TouchableHighlight onPress={this.navigateBack.bind(this)} style={styles.backButton}>
					<Image source={require('./Images/backButton.png')} style={styles.backImage}></Image>
					</TouchableHighlight>
				</View>
				<View style ={styles.viewHeader}>
					<Text style={styles.header}>Notes</Text>
				</View>

				<View style ={styles.viewMiddle}>
					<TextInput 
					style={styles.noteBox} 
					onChangeText={(text) => this.setState({text})}
					value = {this.state.text}
       	 			multiline
					/>
				</View>
				<View style={styles.viewBottom}>
				</View>
				<View style ={styles.viewBottom}>
					<TouchableHighlight onPress={this.navigateCheck.bind(this)} style={styles.checkButton}>
						<Text style={styles.checkText}>Checked Patient</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	checkButton: {
		backgroundColor: '#2fd832',
		height: 40,
		width: 240,
	},
	checkText: {
		color: '#11771f',
		textAlign: 'center',
		fontWeight: '700',
		fontSize: 26,
		marginTop: 5
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	header: {
		fontSize: 36,
		textAlign: 'center',
		margin: 10,
		fontWeight: '700',
		fontFamily: 'Cochin',
	},
	viewPlaceholder: {
		alignItems: 'flex-start',
		flex: 1,
	},
	viewHeader: {
		alignItems: 'center',
		flex: 1,
	},
	viewMiddle: {
		flex: 5,
		alignItems: 'center',
	},
	viewBottom: {
		alignItems: 'center',
		flex: 2
	},
	backImage: {
		height: 25,
		width: 25
	},
	backButton: {
		marginTop: 20,
		marginLeft: 10
	},
	noteBox: {
		alignItems: 'center',
		height: 400,
		color: '#031984',
		backgroundColor: '#b7e3f4',
		width: 380,
		padding: 20,
		textAlignVertical: 'center',
		fontSize: 20,
		fontFamily: 'Helvetica',
		fontWeight: '500',
		marginLeft: 17,
		borderRadius: 10
	},
});

module.exports = NotesPage;
