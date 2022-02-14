import { icons } from '@constants/icons'
import React from 'react'
import { Text, View, TouchableOpacity, FlatList} from 'react-native'
import styles from './styles'
import { characters } from '@constants/data'
import CharacterIcon from '../CharacterIcon'

export default function CharacterIconsContainer({onIconPress}:
    {onIconPress: (iconName: string) => void}){
    const IconItem = ({item}: {item: string}) => {
        return (
            <TouchableOpacity style={styles.iconItemView}key={item}onPress={() => onIconPress(item)}>
                <CharacterIcon name={item}height={40}/>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        )
    }
       
    return (
        <FlatList 
            style={styles.flatList}
            contentContainerStyle={styles.flatContainer}
            renderItem={IconItem}
            data={characters}
            numColumns={3}
            keyExtractor={(item)=>item}
            showsVerticalScrollIndicator={false}
            />
        
    )
}