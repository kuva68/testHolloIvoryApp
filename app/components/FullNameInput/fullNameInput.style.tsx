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
    errorText: TextStyle,
    singleInputView: ViewStyle,
    singleInput: TextInputProps
}

export default StyleSheet.create<fullNameInputStyle
>({
   
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 45,
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
        alignItems: 'center',
       
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
    },
    singleInputView: {
        width: '90%',
        alignItems: 'center',
        padding: 2
       
    },
   singleInput: {
       fontSize: 21,
       fontWeight: '900',
       height: 60,
      
   }

});