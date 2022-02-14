import { icons } from '@constants/icons'
import React from 'react'
import {  View, TouchableOpacity,FlatList} from 'react-native'
import styles from './styles'

import CharacterIcon from '../CharacterIcon'

export default function ChoosingCharactersContainer({onIconPress, characters}:
    {onIconPress: (iconName: string) => void, characters: string[]}){
    
    const IconItem = ({item}: {item: string}) => {
        return (
            <TouchableOpacity style={styles.iconItemView}key={item}onPress={() => onIconPress(item)}>
                <CharacterIcon name={item}height={24}/>
                <View style={styles.roundView}>
                    <icons.RedClose height={12}/>
                </View>
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