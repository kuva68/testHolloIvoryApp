import React, { useState, useRef } from 'react';
import {View, TouchableOpacity} from 'react-native'
import { useDispatch} from 'react-redux'
import Carousel from 'react-native-snap-carousel';
import styles from './styles'
import { colors } from '../../constants/colors';
import { icons } from '../../constants/icons';
import { avatarsData } from '../../constants/data';
import CircleButton from '../../components/Buttons/CircleButton'
import CarouselItem from '@components/CarouselItem'
import {setUserAvatar} from '@redux/actions/user'

interface NavigationProps {
    navigation : {
        navigate: (t: string)=>void
    }
}

export const InitialScreen = ({navigation}: NavigationProps) => {
    const carouselRef = useRef(null)
    const [carouselIndex, setCarouselIndex] = useState<number>(0)
    const dispatch = useDispatch()
    const goNext = () => {
        dispatch(setUserAvatar(carouselIndex))
        navigation.navigate("ChooseYourTeam")
    }
    const carouselScrollHandler = () => setCarouselIndex(carouselRef.current.currentIndex)
    const addCarouselIndex = () => {
        carouselRef.current.snapToNext()
    }
    const subtractCarouselIndex = () => { 
        carouselRef.current.snapToPrev()
    }
    const RenderItem = ({item}:{item:  string}) =>{
        return (
        <CarouselItem name={item}/>
        )
    }

    return (
        <View style={styles.container}>
            <icons.Frame4 />
            <View style={styles.carouselContainer}>
                <TouchableOpacity style={styles.carouselArrow}onPress={subtractCarouselIndex}>
                    <icons.ArrowLeft />
                </TouchableOpacity>
                <Carousel
                    ref={carouselRef}
                    data={avatarsData}
                    renderItem={RenderItem}
                    sliderWidth={250}
                    itemWidth={230}
                    itemHeight={300}
                    sliderHeight={300}
                    onScroll={carouselScrollHandler}
                   
                />
                <TouchableOpacity style={styles.carouselArrow}onPress={addCarouselIndex}>
                    <icons.ArrowRight />
                </TouchableOpacity>
            </View>
           
            <CircleButton 
                color={colors.orange}
                onPress={goNext}
                title='Start'
            />
        </View>
    )

}

export default InitialScreen;
