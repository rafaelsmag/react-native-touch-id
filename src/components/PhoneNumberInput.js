import React, { PropTypes } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { colors } from '../styles/styles';

const PhoneNumberInput = ({ label, value, onChangeText, placeholder, autoCorrect, keyboardType, autoFocus, countryCode }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={countryCode}
        style={{flex: 0.1}}
        value={countryCode}
        editable={false}
      />
      <TextInput
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        style={{flex: 0.8}}
        value={value}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: colors.blackPrimary,
    fontSize: 16,
    height: 40,
    
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});

PhoneNumberInput.propTypes = {
  placeholder: PropTypes.string,
  autoCorrect: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

PhoneNumberInput.defaultProps = {
  placeholder: '',
  autoCorrect: false,
  value: '',
  onChangeText: () => { },
};

export default PhoneNumberInput;