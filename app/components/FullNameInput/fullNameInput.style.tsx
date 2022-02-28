import colors from '../../utils/colors';
import { StyleSheet, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';


interface fullNameInputStyle {
    
    container: ViewStyle,
    input: TextInputProps,
    privacyPolicy: ViewStyle,
    privacyText: TextStyle,
    text: TextStyle,
    inputContainer: ViewStyle;
    inputView: ViewStyle,
    errorText: TextStyle
}

export default StyleSheet.create<fullNameInputStyle
>({
   
    container: {
        width: '100%',

    },
    input: {
        height: 40,
        padding: 13,
        paddingTop: 3,
        color: colors.BLACK,
        fontSize: 15,
        width: '100%',
        marginHorizontal: 10,
        textAlign: 'center',
    
        

    },
    privacyPolicy: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    privacyText: {
        fontSize: 13,
        color: colors.PLACEHOLDER
    },
    text: {
        marginLeft: 7
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
     
    },
    inputView: {
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        width: '50%',
        
      
    },
    errorText: {
        color: colors.ERROR
    }

});