import React,{useState} from 'react';
import {View, Text} from 'react-native'
import { RootNavigatorScreenProps } from '../../navigation';
import styles from './styles'
import { colors } from '../../constants/colors';
import NameTeamAndNumberCard from '@components/ChooseYourCharacter/NameTeamAndNumberCard'
import DefaultButton from '@components/Buttons/DefaultButton'
import {resetUserData, deleteFromUserData,updateUserData} from '@redux/actions/user'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '@redux/reducers';
import CharacterIconsContainer from '@components/ChooseYourCharacter/CharacterIconsContainer'
import ChoosingCharactersContainer from '@components/ChooseYourCharacter/ChoosingCharactersContainer'

interface NavigationProps {
    navigation : {
        navigate: (t: string)=>void
    }
}


export const ChooseYourCharacter = ({navigation}: NavigationProps) => {
    
    const dispatch = useDispatch()
    const {name, team, number,_id } = useSelector((state: RootState) => state?.userReducer)
    const characters = useSelector((state: RootState) => state?.userReducer?.characters??[])
    const onCharacterPress = (name: string) => {
        
        dispatch(updateUserData(JSON.stringify({"characters":[name]}),_id))
        }
    const onCharacterRemove = (name: string) => {
        dispatch(deleteFromUserData(JSON.stringify({"characters":[name]}),_id))
        
    }
    const  onNextPress = () => {
      dispatch(resetUserData())
      navigation.navigate('Initial')
    }
    return (
        <View style={styles.container}>
            <NameTeamAndNumberCard name={name}team={team}number={number}/>
            <Text style={styles.title}>Choose your character</Text>
            <CharacterIconsContainer onIconPress={onCharacterPress}/>
            <Text style={styles.bottomTitle}>Your character</Text>
            <ChoosingCharactersContainer onIconPress={onCharacterRemove}characters={characters}/>
            <DefaultButton
                color={colors.orange}
                onPress={onNextPress}
                title='Done'
                disabled={!characters ||!characters.length}
            />

        </View>
    )

}

export default ChooseYourCharacter;
