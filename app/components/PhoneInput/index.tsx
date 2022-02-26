import React, { FunctionComponent } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';

import { Text } from '../../components';
import { PhoneInputProps } from './PhoneInputProps';
import styles from './phoneInputStyles';
import colors from '../../utils/colors';
import icons from '../../utils/icons';

export const PhoneInput: FunctionComponent<PhoneInputProps> =
    ({ placeHolder, onPress, textColor, onTextChange, countryCode }) => {


        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.touchable}>
                    <icons.UnitedState />
                    {countryCode ? <Text preset='default'style={styles.text}>
                        {countryCode}
                    </Text> : null}
                </TouchableOpacity>
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={colors.PLACEHOLDER}
                    onChangeText={onTextChange}
                    keyboardType='phone-pad'
                    style={[styles.input, { color: textColor }]}
                />
               
                <View style={styles.privacyPolicy}>
                    <Text style={styles.privacyText}>
                        By entering your number, you’re agreeing to our
                    </Text>
                    <TouchableOpacity onPress={() => null}>
                        <Text style={styles.privacyTouchable}>
                            Terms of Service and Privacy policy
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        );
    };
export default PhoneInput