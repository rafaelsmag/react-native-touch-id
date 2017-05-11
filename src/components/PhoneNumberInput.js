import React, { PropTypes } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { colors } from '../styles/styles';

const PhoneNumberInput = ({ value, onChangeText, placeholder, autoCorrect, keyboardType, autoFocus, maxLength, countryCode }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={{ flex: 0.2 }}>
        <Text style={{ color: colors.primaryColor, fontSize: 16, paddingRight: '15%', textAlign: 'right', textAlignVertical: 'center' }}>{countryCode}</Text>
      </View>
      <View style={{ flex: 0.6 }}>
        <TextInput
          style={{ height: 40, color: colors.blackPrimary, fontSize: 16 }}
          placeholder={placeholder}
          autoCorrect={autoCorrect}
          value={value}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          maxLength={maxLength}
        />
      </View>
      <View style={{ flex: 0.2 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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