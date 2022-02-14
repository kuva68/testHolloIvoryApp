import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'
export default function CircleButton({color, onPress, title}:{color: string, onPress: ()=>void, title: string}){
    return (
        <TouchableOpacity 
        style={[styles.touchable,{backgroundColor: color}]}
        onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}