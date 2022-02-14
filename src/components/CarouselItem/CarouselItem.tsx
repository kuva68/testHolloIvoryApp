import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import { icons } from '@constants/icons';
import styles from './styles'
export default function CarouselItem({name}:{name: string}){
    const CardIcon = ({name}: {name: string}) => {
        switch (name) {
            case 'Magic unicorn':
                return <icons.Horse  />;
            case 'Tiger extrovert':
                return <icons.Lion  />;
            case 'Pass through':
                return <icons.JokeMan />;
            case 'Clockwork eggplant':
                return <icons.PurpleVegan  />;
            case 'Maldivian palm':
                return <icons.Palm/>
            default:
                return <icons.Banana />;
        }
    };
    return (
        <View style={styles.mainAvatar}key={name}>
            <CardIcon name={name}/>
            <ImageBackground 
            style={styles.image}
            source={require('@assets/images/Ellipse.jpg')}
            resizeMode='stretch'
            />
            <Text style={styles.title}>{name}</Text>
            
        </View>
    )
}