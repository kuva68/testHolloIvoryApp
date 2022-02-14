import { colors } from '@constants/colors'
import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'
export default function CircleButton({color, onPress, title, disabled}:
    {color: string, onPress: ()=>void, title: string, disabled: boolean}){
    return (
        <TouchableOpacity 
        style={[styles.touchable,{backgroundColor:disabled ?colors.disabledButtonColor : color}]}
        onPress={onPress}
        >
            <Text style={[styles.text,{color: disabled ? colors.disabledTextColor : colors.white}]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}