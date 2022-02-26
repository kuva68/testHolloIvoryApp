import { StyleSheet, TextStyle, TouchableOpacityProps } from 'react-native';


interface MediumSizeButtonStyle {
    touchable: TouchableOpacityProps;
    text: TextStyle
}

export default StyleSheet.create<MediumSizeButtonStyle>({
    touchable: {
        padding: 12,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '55%',
        minHeight: 40,
        borderRadius: 30,
        borderWidth: 1.5,
        flexDirection: 'row',
        paddingRight: 20

    },
    text: {
        marginRight: '33%'
    }
});