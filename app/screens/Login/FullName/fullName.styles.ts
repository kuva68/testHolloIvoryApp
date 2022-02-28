import { StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import colors from '../../../utils/colors';

interface SmsCheck {
  title: TextStyle ,
  main: ViewStyle ,
  root: ViewStyle,
  inputView: ViewStyle
}

export default StyleSheet.create<SmsCheck>({
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 50
  },
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingTop: 10,
    width: '100%',
    paddingBottom: 50
    
  },
 
  inputView: {
    width: '60%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  main: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    marginTop: 60
  }

});
