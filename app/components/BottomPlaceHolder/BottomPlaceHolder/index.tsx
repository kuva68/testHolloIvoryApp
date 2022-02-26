import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

import { BottomPlaceHolderTypes } from './bottomPlaceHolder.props';
import styles from './bottomPlaceHolder.styles';


export const BottomPlaceHolder: FunctionComponent<BottomPlaceHolderTypes> = () => {


    return (
        <View style={styles.container}>
            <View style={styles.placeHolder} />
        </View>

    );
};
export default BottomPlaceHolder