import React, { FunctionComponent } from 'react';
import {  View, TextInput } from 'react-native';
import { Text } from '../../components';
import { FullNameInputProps } from './fullNameInput.props';
import styles from './fullNameInput.style';
import colors from '../../utils/colors';


export const FullNameInput: FunctionComponent<FullNameInputProps> =
    ({  textColor, onNameChange, firstNamePlaceHolder, lastNamePlaceHolder, firstNameError, lastNameError }) => {
      

        return (

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder={firstNamePlaceHolder}
                            placeholderTextColor={colors.PLACEHOLDER}
                            onChangeText={(text) => onNameChange('firstName', text)}
                            keyboardType='text'
                            style={[styles.input, { color: textColor }]}
                        />
                        <Text style={styles.errorText}> {firstNameError ? '!!!' : null}</Text> 
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder={lastNamePlaceHolder}
                            placeholderTextColor={colors.PLACEHOLDER}
                            onChangeText={(text) => onNameChange('lastName', text)}
                            keyboardType='text'
                            style={[styles.input, { color: textColor }]}
                        />
                        <Text style={styles.errorText}>{lastNameError ? '!!!' : null}</Text>
                    </View>
                </View>
                
               
                <View style={styles.privacyPolicy}>
                    <Text style={styles.privacyText}>
                        Use real name
                    </Text>
                   
                </View>

            </View>

        );
    };
export default FullNameInput