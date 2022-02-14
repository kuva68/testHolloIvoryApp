import { colors } from '@constants/colors'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        paddingVertical: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.white
    },
    title: {
        fontSize: 18,
        color: colors.black
    },
    bottomTitle: {
        fontSize: 19,
        color: colors.black
    }
})