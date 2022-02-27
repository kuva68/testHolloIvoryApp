import colors from '../../utils/colors';
import { StyleSheet, ViewStyle } from 'react-native';


interface ThreeDotLoader {
    container: ViewStyle,
    circle: ViewStyle
}

export default StyleSheet.create<ThreeDotLoader>({
    container: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.LIGHT_ORANGE
    }
   
});