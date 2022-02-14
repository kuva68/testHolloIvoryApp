import { icons } from '@constants/icons'
import React from 'react'
import {TouchableOpacity, Text, View, TextInput} from 'react-native'
import styles from './styles'

export default function TextInputContainer({title, placeHolder, setText, text, color}:
    {title: string, placeHolder: string, setText: (name: string)=>void, text: string, color: string}){
    
    return (
        <View style={styles.TopIconsContainer} >
            <Text style={styles.text}>
                {title}
            </Text>
            <View style={styles.IconsContainer}>
                <TextInput
                    placeholder={placeHolder}
                    style={styles.textInput}
                    value={text}
                    onChangeText={setText}
                    placeholderTextColor='rgba(240,130,60,0.4)'
                />
            </View>
        </View>
    )
}