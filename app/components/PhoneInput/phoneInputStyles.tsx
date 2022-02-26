import colors from '../../utils/colors';
import { StyleSheet, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';


interface PhoneInputStyles {
    touchable: TouchableOpacityProps;
    container: ViewStyle,
    input: TextInputProps,
    privacyPolicy: ViewStyle,
    privacyText: TextStyle,
    privacyTouchable: TouchableOpacityProps,
    text: TextStyle
}

export default StyleSheet.create<PhoneInputStyles
>({
    touchable: {
        position: 'absolute',
        left: 0,
        top: 0,
       
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '85%',

    },
    input: {
        height: 40,
        padding: 13,
        paddingTop: 3,
        color: colors.BLACK,
        fontSize: 15,
        marginLeft: 70

    },
    privacyPolicy: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    privacyText: {
        fontSize: 9,
        color: 'rgba(150, 150, 150, 0.6)'
    },
    privacyTouchable: {
        marginHorizontal: 10,
        fontSize: 9,
        fontWeight: '900',
        color: 'rgba(150, 150, 150, 1)'
    },
    text: {
        marginLeft: 7
    }

});