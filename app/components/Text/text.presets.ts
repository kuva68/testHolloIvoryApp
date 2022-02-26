import { TextStyle, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import COLORS from '../../utils/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface TextStyles {
  default: TextStyle;
  title: TextStyle;
  secondary: TextStyle;
  white: TextStyle;
  primary: TextStyle;
  buttonText: TextStyle
}

export type TextPreset = keyof TextStyles;

export default StyleSheet.create<TextStyles>({
  default: BASE,

  title: {
    ...BASE,
    fontSize: 23,
    fontWeight: '800',

  },

  secondary: {
    ...BASE,
    fontSize: 11,
  },
  white: {
    color: colors.WHITE
  },
  primary: {
    color: colors.PRIMARY
  },
  buttonText: {
    fontSize: 12
  }
});
