import React, { Component, PropTypes } from 'react';

import {
  TextInput,
  View,
  StyleSheet
} from 'react-native';
import { colors, hm } from '../styles/styles';

class CodeNumberInput extends Component {

  constructor(props) {
    super(props);
    const size = 4;
    this.state = {
      size,
      code: new Array(size).fill(''),
      edit: 0
    };
    this.textInputsRefs = [];
  }

  clear() {
    this.setState({
      code: new Array(this.props.size).fill(''),
      edit: 0
    });
    this.focus(0);
  }

  focus(id) {
    this.textInputsRefs[id].focus();
  }

  isOnFocus(id) {
    const newCode = this.state.code.slice();
    for (let i = 0; i < newCode.length; i += 1) {
      if (i >= id) {
        newCode[i] = '';
      }
    }
    this.props.onFocus(id);
    this.setState({
      code: newCode,
      edit: id
    });
  }

  handleEdit(number, id) {

    const newCode = this.state.code.slice();
    newCode[id] = number;
    // User filling the last pin ?
    if (id === this.state.size - 1) {
      this.setState({
        code: newCode,
        edit: this.state.edit
      });
      let codeString = '';
      for (let i = 0; i < newCode.length; i += 1) {
        codeString += newCode[i];
      }
      this.props.filled(codeString);
      return;
    }

    this.focus(this.state.edit + 1);
    this.setState(prevState => {
      return {
        code: newCode,
        edit: prevState.edit + 1
      };
    });
  }

  render() {


    return (

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 4 * hm }}>
          <TextInput
            key={0}
            ref={(ref) => { this.textInputsRefs[0] = ref; return null; }}
            onChangeText={text => this.handleEdit(text, 0)}
            onFocus={() => this.isOnFocus(0)}
            value={this.state.code[0] ? this.state.code[0].toString() : ''}
            style={[styles.inputStyle, { borderColor: this.state.code[0] ? colors.primaryColor : colors.blackSecondary }]}
            returnKeyType={'done'}
            autoCapitalize={'sentences'}
            autoCorrect={false}
            maxLength={1}
          />
          <TextInput
            key={1}
            ref={(ref) => { this.textInputsRefs[1] = ref; return null; }}
            onChangeText={text => this.handleEdit(text, 1)}
            onFocus={() => this.isOnFocus(1)}
            value={this.state.code[1] ? this.state.code[1].toString() : ''}
            style={[styles.inputStyle, { borderColor: this.state.code[1] ? colors.primaryColor : colors.blackSecondary }]}
            returnKeyType={'done'}
            autoCapitalize={'sentences'}
            autoCorrect={false}
            maxLength={1}
          />
          <TextInput
            key={2}
            ref={(ref) => { this.textInputsRefs[2] = ref; return null; }}
            onChangeText={text => this.handleEdit(text, 2)}
            onFocus={() => this.isOnFocus(2)}
            value={this.state.code[2] ? this.state.code[2].toString() : ''}
            style={[styles.inputStyle, { borderColor: this.state.code[2] ? colors.primaryColor : colors.blackSecondary }]}
            returnKeyType={'done'}
            autoCapitalize={'sentences'}
            autoCorrect={false}
            maxLength={1}
          />
          <TextInput
            key={3}
            ref={(ref) => { this.textInputsRefs[3] = ref; return null; }}
            onChangeText={text => this.handleEdit(text, 3)}
            onFocus={() => this.isOnFocus(3)}
            value={this.state.code[3] ? this.state.code[3].toString() : ''}
            style={[styles.inputStyle, { borderColor: this.state.code[3] ? colors.primaryColor : colors.blackSecondary }]}
            returnKeyType={'done'}
            autoCapitalize={'sentences'}
            autoCorrect={false}
            maxLength={1}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    borderColor: colors.blackSecondary,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    height: 40,
    width: 40,
    textAlign: 'center'
  }
};

export default CodeNumberInput;
