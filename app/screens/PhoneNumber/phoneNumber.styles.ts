import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '../../utils/colors';

interface PhoneNumberStyles {
  root: ViewStyle;
  buttonsView: ViewStyle;
  svgView: ViewStyle
  title:  TextStyle
}

export default StyleSheet.create<PhoneNumberStyles>({
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    paddingTop: 10
  },
  buttonsView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 95
  },
  svgView: {
    width: '100%',
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }

});
