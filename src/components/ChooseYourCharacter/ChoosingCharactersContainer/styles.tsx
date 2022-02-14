import {StyleSheet} from 'react-native'
import { colors } from '@constants/colors'
export default StyleSheet.create({
    TopIconsContainer: {
        width: '70%',
        alignItems: 'center',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        height: 150,
    
    },
    roundView: {
        position: 'absolute',
        top: 3,
        right: 0,
        height: 20,
        width: 20,
        borderRadius: 5,
        elevation: 13,
        shadowColor: colors.lightGrey,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } ,
    iconItemView: {
        height: 50,
        width: '25%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 5,
        margin: 5,
      
    },
    flatList: {
        width: '80%',
        minHeight: 150,
        marginVertical: 10
    },
   
    flatContainer: {
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    }
   
})