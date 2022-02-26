import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '../../../components';
import { DefaultButtonProps } from './defaultButton.props';
import { styles } from './defaultButton.styles';
import colors from '../../../utils/colors';

export const DefaultButton: FunctionComponent<DefaultButtonProps> =
    ({ title, onPress, bgColor, borderColor, disabled, textColor }) => {


        return (

            <TouchableOpacity
                style={[styles.touchable,
                { backgroundColor: disabled ? colors.DISABLE : bgColor, borderColor: disabled ? colors.DISABLE : borderColor }]}
                onPress={onPress}
            >
                <Text preset='buttonText' style={{ color: textColor }}>{title}</Text>


            </TouchableOpacity>

        );
    };