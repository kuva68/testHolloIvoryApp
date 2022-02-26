import { StyleSheet, TouchableOpacityProps, ViewStyle } from 'react-native';


interface DefaultHeaderStyle {
    touchable: TouchableOpacityProps;
    container: ViewStyle
}

export default StyleSheet.create<DefaultHeaderStyle
>({
   touchable: {
       padding: 15,
       justifyContent: 'center',
       alignItems: 'center',
       position: 'absolute',
       left: 0,
       top: 0,
       bottom: 0
   },
   container: {
       width: '100%',
       height: 60,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
   
   }

});