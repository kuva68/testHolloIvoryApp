import {StyleSheet} from 'react-native'
import { colors } from '@constants/colors'
export default StyleSheet.create({
    TopIconsContainer: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        marginBottom: 60
    },
    text: {
        color:'#000000',
        fontSize: 17,
        fontWeight: '800',
        marginBottom: 5
    },
    IconsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    anchor: {
        width: 150,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0
    },
    anchorText: {
        color: colors.orange,
        fontSize: 17
    },
    textStyle: {
        opacity: 0.5,
        fontSize: 16
    }
})