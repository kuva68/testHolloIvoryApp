import { icons } from '@constants/icons'
import React,{useState} from 'react'
import { Text, View} from 'react-native'
import styles from './styles'
import { colors } from '@constants/colors';

export default function NameTeamAndNumberCard({name, team, number}:
    {name: string,team: string, number: number | null}){
       

        const IconContainer = ({iconName}: {iconName:string}) => {
            switch(iconName){
                case 'square':
                    return (
                        <icons.Rectangle/>
                    )
                case 'circle':
                    return(
                        <icons.Circle/>
                    )
                case 'triangle':
                    return (
                        <icons.Triangle/>
                    )
                default :
                    return (
                    <icons.Triangle/>
                    )
            }
        }
       
    return (
        <View style={styles.TopIconsContainer} >
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {name}
                </Text>
            </View>
            
            <View style={styles.IconsContainer}>
                <IconContainer iconName={team}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {number}
                </Text> 
            </View>
           
        </View>
    )
}