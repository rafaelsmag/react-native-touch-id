import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import { phoneScreen } from '../../../styles/phone/styles';

import * as actions from './../actions/index';

class VerifyCodeScreen extends Component {

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
            <Text style={phoneScreen.infoText}>Nós enviamos um código por SMS para verificar o seu número de telefone</Text>
            <CodeNumberInput 
            />
          </View>
          <TouchableOpacity>
            <View style={[phoneScreen.bottomButton, { bottom: this.state.bottomScreen }]}>
              <Text style={phoneScreen.bottomButtonText}>VALIDAR CÓDIGO</Text>
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
)(VerifyCodeScreen);
