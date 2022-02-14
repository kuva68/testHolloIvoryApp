import {StyleSheet} from 'react-native'
import { colors } from '@constants/colors'
export default StyleSheet.create({
    TopIconsContainer: {
        width: '100%',
        height: 150,
        alignItems: 'center'
    },
    text: {
        color:'#000000',
        fontSize: 17,
        marginBottom: 10
    },
    IconsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    iconView: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})