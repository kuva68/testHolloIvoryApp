import { StyleSheet, ViewStyle } from 'react-native';
import colors from '../../../utils/colors';

interface DefaultButtonStylesTypes {
    container: ViewStyle;
    placeHolder: ViewStyle

}

export default StyleSheet.create<DefaultButtonStylesTypes>({
    container: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeHolder: {
        width: '37%',
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.BLACK
    }
});