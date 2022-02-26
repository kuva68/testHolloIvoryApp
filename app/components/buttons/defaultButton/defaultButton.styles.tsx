import { StyleSheet, TouchableOpacityProps } from 'react-native';


interface DefaultButtonStylesTypes {
    touchable: TouchableOpacityProps;

}

export const styles = StyleSheet.create<DefaultButtonStylesTypes>({
    touchable: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '78%',
        minHeight: 40,
        borderRadius: 30,
        borderWidth: 1.5

    }
});