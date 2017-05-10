import React, { Component } from 'react';
import { ListView, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import { colors } from '../../../styles/styles';

import * as actions from './../actions/index';

class PhoneScreen extends Component {

	static route = {
		navigationBar: {
			visible: false
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			phoneNumber: ''
		}
		this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this);
	}

	onSubmitPhoneNumber(phoneNumber) {
		console.log(phoneNumber);
	} 

	render() {
		return (
			<View style={{ paddingHorizontal: 10, paddingVertical: 20, backgroundColor: colors.lightBackground, flex: 1}}>
				<Text style={{ flex: 1 }}> Informe o número do seu celular</Text>
				<PhoneNumberInput 
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            value={ this.state.phoneNumber }
            autoFocus
            keyboardType="numeric"
						countryCode="+55"/>
			</View>
		);
	}
}

export default connect(
	state => ({
		phoneState: state.phone
	}),
	dispatch => ({
		phoneActions: bindActionCreators(actions, dispatch),
	})
)(PhoneScreen);
