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
    textInput: {
        width: '90%',
        height: 40,
        padding: 10,
        color:colors.orange,
        fontSize: 13
    }
})