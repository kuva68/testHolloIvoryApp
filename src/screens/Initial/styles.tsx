import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        paddingVertical: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white'
    },
    image: {
        width: 200,
        height: 40
    },
    mainAvatar: {
        width: 120,
        height: 200 
    },
    carouselContainer: {
        width: '100%',
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        
    },
    carouselArrow: {
        height: '100%',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})