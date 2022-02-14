import {StyleSheet} from 'react-native'
import { colors } from '@constants/colors'
export default StyleSheet.create({
    touchable: {
        height: 90,
        width: 90,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        shadowColor: colors.orange,
        shadowOffset: {
            width: 15,
            height: 15
          },
        shadowOpacity:0.3,
        textShadowRadius: 9
    },
    text: {
        color:'#e6e6e6',
        fontSize: 12
    }
})