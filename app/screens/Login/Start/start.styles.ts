import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '../../../utils/colors';

interface HomeScreenStyles {
  root: ViewStyle;
  buttonsView: ViewStyle;
  svgView: ViewStyle

}

export default StyleSheet.create<HomeScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    paddingTop: 20
  },
  buttonsView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 95
  },
  svgView: {
    width: '100%',
    paddingLeft: 50
  },

});
