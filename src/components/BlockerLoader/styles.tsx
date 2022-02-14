import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@constants/colors';


const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        justifyContent: 'center',
        zIndex: 1000
    },
    modalBacksideContainer: {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalWindow: {
        marginHorizontal: windowWidth * 0.1,
        borderRadius: 15
    },
    headerText: {
        fontSize: 17,
        marginBottom: 10
    }
});
