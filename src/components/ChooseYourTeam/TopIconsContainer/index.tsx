import { colors } from '@constants/colors'
import { icons } from '@constants/icons'
import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import styles from './styles'
export default function TopIconsContainer({title, team, setTeam}:
    {title: string, team: 'circle' | 'square' | 'triangle'| '', 
    setTeam: (teamName: 'circle' | 'square' | 'triangle')=>void}){
    
    return (
        <View style={styles.TopIconsContainer} >
            <Text style={styles.text}>
                {title}
            </Text>
            <View style={styles.IconsContainer}>
                <TouchableOpacity 
                    onPress={() =>setTeam('circle')}
                    style={[styles.iconView,{backgroundColor: team === 'circle' ? colors.orange : 'white'}]}
                >
                    {team === 'circle' ?
                    <icons.CircleWhite /> :
                    <icons.Circle/>
                    }
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() =>setTeam('square')}
                    style={[styles.iconView,{backgroundColor: team === 'square' ? colors.orange : 'white'}]}
                >
                    {team === 'square'?
                    <icons.RectangleWhite/> :
                    <icons.Rectangle/>
                    }
                </TouchableOpacity>
                <TouchableOpacity 
                     onPress={() =>setTeam('triangle')}
                    style={[styles.iconView,{backgroundColor: team === 'triangle' ? colors.orange : 'white'}]}
                >
                    {team === 'triangle' ?
                    <icons.TriangleWhite/> :
                    <icons.Triangle/>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}