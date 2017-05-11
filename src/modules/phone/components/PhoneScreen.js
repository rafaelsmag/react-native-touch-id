import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Keyboard, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import { phoneScreen } from '../../../styles/phone/styles';
import { colors } from '../../../styles/styles';

import * as actions from './../actions/index';
import * as navigatorActions from '../../navigator/actions/index';


class PhoneScreen extends Component {

  static route = {
    navigationBar: {
      visible: false
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      bottomScreen: 0
    };
    this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onSubmitPhoneNumber() {
    const { phoneNumber } = this.state;
    const { phoneActions, phoneState, navActions, navigator } = this.props;
    if (phoneState.isLoading) {
      return null;
    }
    if (!phoneNumber || phoneNumber.length < 1) {
      navActions.setAlert({ type: 'error', message: 'Verifique o número de telefone informado', duration: 5000 });
      return null;
    }
    phoneActions.submitPhoneNumber(this.state.phoneNumber, navigator);
  }

  componentWillMount() {
    Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
  }

  keyboardWillShow(e) {
    this.setState({ bottomScreen: e.endCoordinates.height });
  }

  keyboardWillHide() {
    this.setState({ bottomScreen: 0 });
  }

  onChangeText(phoneNumber) {
    console.log(phoneNumber);
    this.setState({ phoneNumber });
  }

  renderMiddleContent() {
    const { phoneState } = this.props;

    if (phoneState.isLoading) {
      return (
        <View style={phoneScreen.containerLoading}>
          <ActivityIndicator size="large" color={colors.primaryColor} />
        </View>
      );
    }

    return (
      <View style={phoneScreen.middleSection}>
        <Text style={phoneScreen.infoText}>Digite o número do seu celular com o código de área para fazer login ou criar uma nova conta</Text>
        <PhoneNumberInput
          onChangeText={this.onChangeText}
          value={this.state.phoneNumber}
          autoFocus
          keyboardType="numeric"
          countryCode="+55"
          placeholder="(00) 00000-0000"
          maxLength={15}
        />
      </View>
    );

  }

  renderButton() {
    const { phoneState } = this.props;

    if (phoneState.isLoading) {
      return null;
    }
    return (
      <TouchableOpacity onPress={this.onSubmitPhoneNumber}>
        <View style={[phoneScreen.bottomButton, { bottom: this.state.bottomScreen }]}>
          <Text style={phoneScreen.bottomButtonText}>ENVIAR CÓDIGO DE VERIFICAÇÃO</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={phoneScreen.scrollContainer}>
        <View style={phoneScreen.containerStyle}>
          <View style={phoneScreen.firstSection}>
            <Text style={phoneScreen.headerText}>Verifique seu celular</Text>
          </View>
          {this.renderMiddleContent()}
          {this.renderButton()}
        </View>
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    phoneState: state.phone
  }),
  dispatch => ({
    phoneActions: bindActionCreators(actions, dispatch),
    navActions: bindActionCreators(navigatorActions, dispatch)
  })
)(PhoneScreen);
