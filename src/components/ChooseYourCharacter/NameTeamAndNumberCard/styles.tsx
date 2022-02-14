import {StyleSheet} from 'react-native'
import { colors } from '@constants/colors'
export default StyleSheet.create({
    TopIconsContainer: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    text: {
        color:'#000000',
        fontSize: 16,
        fontWeight: '600',
        
    },
    IconsContainer: {

    },
    textContainer: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})