import React from 'react'
import {TextInput, Button, View, StyleSheet} from 'react-native'
import Expo from 'expo'

import PropTypes from 'prop-types'

export default class AddContactForm extends React.Component {
	state = {
		name: '',
    phone: '',
    isFormValid: false,
	} 
	componentDidUpdate(prevProps, prevState) {
		if (this.state.name !== prevState.name ||
			this.state.phone !== prevState.phone
		) {
			this.validateForm()
		}
	}
	validateForm = () => {
		console.log(this.state)
		const names = this.state.name.split(' ')
    if (+this.state.phone >= 0 && this.state.phone.length === 10 && names.length >= 2 && names[0])
    {
			this.setState({isFormValid: true})
		} else {
			this.setState({isFormValid: false})
		}
	}
	handleNameChange = name => {
		this.setState({name})
	}
	handlePhoneChange = phone => {
		if (+phone >=0) {
			this.setState({phone})
		}
	}
	handleSubmit = () => {
		this.props.onSubmit(this.state)
	}

	
	render() {
		return (
			<View style={{paddingTop:30}}>
				<TextInput
					style={styles.input}
					value={this.state.name}
					placeholder="Name"
					onChangeText={this.handleNameChange}
				/>
				<TextInput
					style={styles.input}
					value={this.state.phone}
					keyboardType='numeric'
					placeholder="Phone"
					onChangeText={this.handlePhoneChange}
				/>

				<Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}></Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: Expo.Constants.statusBarHeight,
			backgroundColor: '#fff',
		},
		input: {
			borderColor: 'pink',
			borderWidth: 1,
			minWidth: 100,
			marginTop: 20,
			marginHorizontal: 20,
			paddingHorizontal: 10,
			paddingVertical: 5,
			borderRadius: 3,
		}
})
