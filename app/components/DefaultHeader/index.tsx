import React, { FunctionComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import icons from '../../utils/icons';
import { DefaultHeaderProp } from './defaultHeader.prop';
import  styles  from './headerLeft.style';


export const DefaultHeader: FunctionComponent<DefaultHeaderProp> =
    ({ back}) => {


        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.touchable]}
                    onPress={back}
                >
                    <icons.Back /> 
                </TouchableOpacity>
            </View>
           

        );
    };
    export default DefaultHeader