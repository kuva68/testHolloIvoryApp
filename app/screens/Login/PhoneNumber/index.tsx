import React, { FunctionComponent } from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../../components';
import { PhoneNumberProps } from './phoneNumber.props';
import styles from './phoneNumber.styles';
import icons from '../../../utils/icons';
import colors from '../../../utils/colors';
import MediumSizeButton from '../../../components/buttons/mediumSizeButton';
import BottomPlaceHolder from '../../../components/BottomPlaceHolder/BottomPlaceHolder';
import DefaultHeader from '@components/DefaultHeader';
import  PhoneInput  from '@components/PhoneInput';

export const PhoneNumberScreen: FunctionComponent<PhoneNumberProps> = ({navigation}) => {
  const back = () => navigation.goBack()
  const nextPressHandler = () => {
    navigation.navigate('SmsCheck')
  }
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        backgroundColor={colors.WHITE}
        barStyle={'dark-content'}
        currentHeight={10}
      />
      <DefaultHeader back={back}/>
      <Text preset='title'style={styles.title}>Sign in with your phone</Text>
       <View style={styles.svgView}>
        <icons.HandWithPhone height={160}/>
      </View> 
      <PhoneInput 
        placeHolder='Phone number'
        onPress={()=>null}
        textColor={colors.BLACK}
        onTextChange={()=>null}
        countryCode='+1'
      />
      <MediumSizeButton
        bgColor={colors.PRIMARY}
        borderColor={colors.PRIMARY}
        onPress={nextPressHandler}
        title='Next'
        disabled={false}
        textColor={colors.WHITE}
      /> 


      <BottomPlaceHolder />
    </SafeAreaView>
  );
};
