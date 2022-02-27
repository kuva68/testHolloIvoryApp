import React, { FunctionComponent, useState } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { SmsCheckProps } from './smsCheck.props';
import styles from './smsCheck.styles';
import colors from '../../utils/colors';
import MediumSizeButton from '../../components/buttons/mediumSizeButton';
import BottomPlaceHolder from '../../components/BottomPlaceHolder/BottomPlaceHolder';
import DefaultHeader from '@components/DefaultHeader';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import ThreeDotLoader from '@components/ThreeDotLoader';

export const SmsCheckScreen: FunctionComponent<SmsCheckProps> = ({navigation}) => {
  const [code, setCode] = useState<string>('')
  const back = () => navigation.goBack()
  const PlaceHolder = (() =><View style={styles.circle}></View>)
  const editCode = (codeFromInput: string) => setCode(codeFromInput)
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        backgroundColor={colors.WHITE}
        barStyle={'dark-content'}
        currentHeight={10}
      />
      <DefaultHeader back={back}/>
      <Text preset='title'style={styles.title}>Check your text - we sent you a verification code!</Text>
      <View style={styles.inputView}>
        <SmoothPinCodeInput
          placeholder={<PlaceHolder />}
          cellSize={40}
          cellStyle={{borderWidth: 0, justifyContent: 'center',alignItems: 'center',}}
          cellStyleFocused={{backgroundColor: colors.DISABLE}}
          value={code}
          codeLength={6}
          onTextChange={editCode}
        />
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.touchableText}>
            Didn’t receive it? Tap to resend
          </Text>
        </TouchableOpacity>
      </View>
      
      <ThreeDotLoader/>
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
export default SmsCheckScreen
