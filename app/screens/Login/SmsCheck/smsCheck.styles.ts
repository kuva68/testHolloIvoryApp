import { StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import colors from '../../../utils/colors';

interface SmsCheck {
  title: TextStyle ,
  circle: ViewStyle ,
  root: ViewStyle,
  touchable: TouchableOpacityProps,
  touchableText: TextStyle,
  inputView: ViewStyle
}

export default StyleSheet.create<SmsCheck>({
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 15
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 25,
    opacity: 0.3,
    backgroundColor: colors.PLACEHOLDER,
  },
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    paddingTop: 10
  },
  touchable: {
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchableText: {
    fontSize: 10,
    color: colors.PLACEHOLDER
  },
  inputView: {
    width: '60%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  }

});
