import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import icons from '../../../utils/icons';
import { Text } from '../../../components';
import { MediumSizeButtonProp } from './mediumSizeButtonProps';
import styles from './MediumSizeButtonStyle';
import colors from '../../../utils/colors';

export const MediumSizeButton: FunctionComponent<MediumSizeButtonProp> =
    ({ title, onPress, bgColor, borderColor, disabled, textColor }) => {


        return (

            <TouchableOpacity
                style={[styles.touchable,
                { backgroundColor: disabled ? colors.DISABLE : bgColor, borderColor: disabled ? colors.DISABLE : borderColor }]}
                onPress={onPress}
            >
                <Text preset='buttonText' style={[styles.text, { color: textColor }]}>{title}</Text>
                <icons.ArrowRight />

            </TouchableOpacity>

        );
    };
export default MediumSizeButton