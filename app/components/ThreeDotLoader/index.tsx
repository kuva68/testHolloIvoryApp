import React, { FunctionComponent, useEffect, useRef } from 'react';
import {  View, Animated } from 'react-native';
import { ThreeDotLoaderProp } from './threeDotLoaderProp';
import styles from './treeDotLoader.style';

export const ThreeDotLoader: FunctionComponent<ThreeDotLoaderProp> =
    () => {
        let opacityVal = useRef(new Animated.Value(0)).current
        useEffect(()=>{
            Animated.loop(
                Animated.timing(opacityVal, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true
                })
            ).start()
               
                   ;
        },[])
        return (
        <View style={[styles.container]}>
            <Animated.View style={[styles.circle, {opacity:opacityVal.interpolate({
                inputRange: [0,  0.5, 1],
                outputRange: [0.1, 1, 0.1]
            })}]}>
                
            </Animated.View>
            <Animated.View style={[styles.circle, {opacity:opacityVal.interpolate({
                inputRange: [0,  0.25, 0.5,  0.75,  1],
                outputRange: [0.55, 1, 0.55, 0.1, 0.55 ]
                })
                }]
            }/>
            <Animated.View style={[styles.circle, {opacity:opacityVal.interpolate({
                inputRange: [0,  0.5, 1],
                outputRange: [ 1, 0.1, 1]
                })}]
            }/>
        </View>
    )}
export default ThreeDotLoader