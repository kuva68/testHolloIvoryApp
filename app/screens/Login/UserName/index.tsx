import React, { FunctionComponent, useState } from 'react';
import {  StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@components';
import { UserNameProps } from './userName.props';
import styles from './userName.styles';
import colors from '../../../utils/colors';
import MediumSizeButton from '@components/buttons/mediumSizeButton';
import BottomPlaceHolder from '@components/BottomPlaceHolder/BottomPlaceHolder';
import DefaultHeader from '@components/DefaultHeader';
import FullNameInput from '@components/FullNameInput';

export const UserNameScreen: FunctionComponent<UserNameProps> = ({navigation}) => {
  const [userName, setUserName] = useState<string>('')
  const [errors, setErrors] = useState<string>('')
  const back = () => navigation.goBack()
  
  const onNameChange = ( nameFromInput?: string) => {
    if(nameFromInput)setUserName(nameFromInput)
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
          variant='userName'
          textColor={colors.BLACK} 
          onNameChange={onNameChange} 
          firstNamePlaceHolder='@username' 
          lastNamePlaceHolder=''
          firstNameError={errors} 
          lastNameError={null}
          description='Change your username'
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
export default UserNameScreen
