import React,{useState} from 'react';
import {View} from 'react-native'
import { RootNavigatorScreenProps } from '../../navigation';
import styles from './styles'
import { colors } from '../../constants/colors';
import NumberPickerContainer from '@components/ChooseYourTeam/NumberPickerContainer'
import TopIconsContainer from '@components/ChooseYourTeam/TopIconsContainer'
import TextInputContainer from '@components/ChooseYourTeam/TextInputContainer'
import DefaultButton from '@components/Buttons/DefaultButton'
import {sendUserData, setUserData} from '@redux/actions/user'
import {useDispatch, useSelector} from 'react-redux'
import { NavigationRouteContext } from '@react-navigation/native';
import { RootState } from '@redux/reducers';

interface ChooseYourTeamProps extends RootNavigatorScreenProps<'ChooseYourTeam'> {}

interface NavigationProps {
    navigation : {
        navigate: (t: string)=>void
    }
}
export const ChooseYourTeam: React.FC<ChooseYourTeamProps> = ({navigation}: NavigationProps) => {
    const dispatch = useDispatch()
    const [team,setTeam] = useState<'circle' | 'square' | 'triangle'| ''>('')
    const [name,setName] = useState<string>('')
    const [number,setNumber] = useState<number | null>(null)
    const {logoId} = useSelector((state: RootState) => state?.userReducer)
    const writeName = (str: string) => {
        setName(str)
    }
    const chooseTeam = (teamName: 'circle' | 'square' | 'triangle') => {
        setTeam(team === teamName ? '' : teamName)
    }
    const writeNumber = (number: number | null) => {
        setNumber(number)
    }
    const  onNextPress = () => {
        dispatch(setUserData({team:team, name: name, number: number}))
        navigation.navigate('ChooseYourCharacter')
        let data = {
            name: name,
            number:	number?.toString(),
            team:	team.toLowerCase(),
            logoId:	logoId,
            characters:	[]
        }
       dispatch(sendUserData(JSON.stringify(data)))
    }
    return (
        <View style={styles.container}>
            <TopIconsContainer
                title= 'Choose your team'
                team={team}
                setTeam={chooseTeam}
            />
            <TextInputContainer
                title='Enter your name'
                placeHolder='Name'
                setText={writeName}
                text={name}
                color={colors.orange}
            />
            <NumberPickerContainer
                title='Choose your number'
                setNumber={writeNumber}
                number={number}
            />
           
           <DefaultButton
            color={colors.orange}
            onPress={onNextPress}
            title='Next'
            disabled={!team || !name || !number}
            />

        </View>
    )

}

export default ChooseYourTeam;
