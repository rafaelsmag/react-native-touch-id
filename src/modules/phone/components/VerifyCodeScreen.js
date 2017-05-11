import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CodeNumberInput from '../../../components/CodeNumberInput';
import { codeScreen } from '../../../styles/phone/styles';
import { colors } from '../../../styles/styles';

import * as actions from './../actions/index';

class VerifyCodeScreen extends Component {

  static route = {
    navigationBar: {
      visible: true,
      title: 'Verificar Telefone'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
    this.codeFilled = this.codeFilled.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
  }

  renderIcon() {
    const { codeSuccess, isLoading, codeErrorMessage } = this.props.phoneState;
    if (codeSuccess) {
      return <Ionicons name="ios-checkmark-circle" size={80} color="green" />;
    }
    if (isLoading) {
      return <ActivityIndicator size="large" color={colors.primaryColor} />;
    }
    if (codeErrorMessage) {
      return <Ionicons name="ios-alert-outline" size={80} color={colors.primaryColor} />;
    }
    return <Ionicons name="ios-checkmark-circle-outline" size={80} color={colors.primaryColor} />;

  }

  codeFilled(code) {
    console.log(this.props);
    const { phoneActions } = this.props;
    this.setState({ code });
    phoneActions.submitCodeVerify(code);
  }

  onInputFocus(id) {
    const { phoneActions } = this.props;
    const { codeErrorMessage, codeSuccess} = this.props.phoneState;

    console.log(codeErrorMessage, codeSuccess);
    if (codeErrorMessage || codeSuccess) {
      phoneActions.dismissErrorMessage();
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={codeScreen.scrollContainer}>
        <View style={codeScreen.containerStyle}>
          <View style={codeScreen.firstSection}>
            {this.renderIcon()}
          </View>
          <View style={codeScreen.middleSection}>
            <Text style={codeScreen.infoText}>Nós enviamos um código por SMS para verificar o seu número de telefone</Text>
            <CodeNumberInput
              filled={this.codeFilled}
              onFocus={this.onInputFocus}
            />
          </View>
          <TouchableOpacity>
            <View style={codeScreen.bottomButton}>
              <Text style={codeScreen.bottomButtonText}>VALIDAR CÓDIGO</Text>
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
