import React, { FunctionComponent, useState } from 'react';
import {  StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@components';
import { SmsCheckProps } from './fullName.props';
import styles from './fullName.styles';
import colors from '../../../utils/colors';
import MediumSizeButton from '@components/buttons/mediumSizeButton';
import BottomPlaceHolder from '@components/BottomPlaceHolder/BottomPlaceHolder';
import DefaultHeader from '@components/DefaultHeader';
import FullNameInput from '@components/FullNameInput';

export const FullNameScreen: FunctionComponent<SmsCheckProps> = ({navigation}) => {
  const [fullName, setFullName] = useState<{firstName:string, lastName: string}>({firstName: '', lastName: ''})
  const [errors, setErrors] = useState<{firstName:string | null, lastName: string | null}>({firstName: null, lastName: null})
  const back = () => navigation.goBack()
  
  const onNameChange = (prop: string, nameFromInput: string) => {
    setFullName({...fullName, [prop]: nameFromInput})
  }
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        backgroundColor={colors.WHITE}
        barStyle={'dark-content'}
        currentHeight={10}
      />
      <DefaultHeader back={back}/>
      <View style={styles.main}>
      <Text preset='title'style={styles.title}>What’s your full name?</Text>      
        <FullNameInput
          textColor={colors.BLACK} 
          onNameChange={onNameChange} 
          firstNamePlaceHolder='First name' 
          lastNamePlaceHolder='Last name'
          firstNameError={errors.firstName} 
          lastNameError={errors.lastName}
        />
      </View>
     
      <MediumSizeButton
        bgColor={colors.PRIMARY}
        borderColor={colors.PRIMARY}
        onPress={() => null}
        title='Next'
        disabled={false}
        textColor={colors.WHITE}
      /> 
      <BottomPlaceHolder />
    </SafeAreaView>
  );
};
export default FullNameScreen
