import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import { phoneScreen } from '../../../styles/phone/styles';

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
      phoneNumber: '',
      bottomScreen: 0
    };
    this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this);
  }

  onSubmitPhoneNumber(phoneNumber) {
    console.log(phoneNumber);
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


  render() {
    return (
      <ScrollView contentContainerStyle={phoneScreen.scrollContainer}>
        <View style={phoneScreen.containerStyle}>
          <View style={phoneScreen.firstSection}>
            <Text style={phoneScreen.headerText}>Verifique seu celular</Text>
          </View>
          <View style={phoneScreen.middleSection}>
            <Text style={phoneScreen.infoText}>Digite o número do seu celular com o código de área para fazer login ou criar uma nova conta</Text>
            <PhoneNumberInput
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
              autoFocus
              keyboardType="numeric"
              countryCode="+55"
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
          </View>
          <TouchableOpacity>
            <View style={[phoneScreen.bottomButton, { bottom: this.state.bottomScreen }]}>
              <Text style={phoneScreen.bottomButtonText}>ENVIAR CÓDIGO DE VERIFICAÇÃO</Text>
            </View>
          </TouchableOpacity>
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
  })
)(PhoneScreen);
