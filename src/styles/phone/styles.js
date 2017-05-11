import { StyleSheet, Platform } from 'react-native';
import { colors, hm, vm, height } from '../styles';

export const phoneScreen = StyleSheet.create({

  scrollContainer: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  firstSection: {
    flex: 0.3,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleSection: {
    flex: 0.7,
    marginHorizontal: 2 * vm
  },
  containerLoading: {
    flex: 0.7,
    marginHorizontal: 2 * vm,
    justifyContent: 'flex-start',
    paddingTop: 10 * vm
  },
  headerText: {
    color: colors.whitePrimary,
    fontSize: 18,
    fontWeight: 'bold'
  },
  infoText: {
    color: colors.blackSecondary,
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 2 * hm
  },
  bottomButton: {
    height: hm * 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.blackDisabled,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.blackDisabled,
    position: 'relative',
    bottom: 0,
    right: 0,
  },
  bottomButtonText: {
    fontWeight: 'bold',
    color: colors.primaryColor,
    paddingLeft: hm / 2,
  }
});

export const codeScreen = StyleSheet.create({

  scrollContainer: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  firstSection: {
    flex: 0.3,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleSection: {
    flex: 0.7,
    marginHorizontal: 2 * vm
  },
  containerLoading: {
    flex: 0.7,
    marginHorizontal: 2 * vm,
    justifyContent: 'flex-start',
    paddingTop: 10 * vm
  },
  headerText: {
    color: colors.whitePrimary,
    fontSize: 18,
    fontWeight: 'bold'
  },
  infoText: {
    color: colors.blackSecondary,
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 2 * hm
  },
  bottomButton: {
    height: hm * 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.blackDisabled,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.blackDisabled,
    position: 'relative',
    bottom: 0,
    right: 0,
  },
  bottomButtonText: {
    fontWeight: 'bold',
    color: colors.primaryColor,
    paddingLeft: hm / 2,
  }
});
