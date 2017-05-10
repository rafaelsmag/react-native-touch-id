import React, { Component, PropTypes } from 'react';
import { StatusBar } from 'react-native';
import { Router } from '../../../router/routes';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import { colors } from '../../../styles/styles';


class Navigator extends Component {

  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar
          backgroundColor={colors.primaryColor}
          barStyle="light-content"
        />
        <StackNavigation
          id="master"
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: colors.primaryColor,
              tintColor: '#ffffff',
            }
          }}
          initialRoute={Router.getRoute('phone')}
        />
      </NavigationProvider>
    );
  }
}

export default connect(
  state => ({
    navState: state.navigator
  }),
  dispatch => ({
    navActions: bindActionCreators(actions, dispatch)
  }))(Navigator);