import React, { FunctionComponent } from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserAccount } from '../../redux/user';
import { Text } from '../../components';
import { StartScreenProps } from './start.props';
import styles from './start.styles';
import icons from '../../utils/icons';
import colors from '../../utils/colors';
import { DefaultButton } from '../../components/buttons/defaultButton';
import BottomPlaceHolder from '../../components/BottomPlaceHolder/BottomPlaceHolder';


export const StartScreen: FunctionComponent<StartScreenProps> = ({navigation}) => {
   const createFamily = () => {
    navigation.navigate('PhoneNumber')
  } 

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        backgroundColor={colors.WHITE}
        barStyle={'dark-content'}
      />
      <Text preset='title'>I want to:</Text>
      <View style={styles.svgView}>
        <icons.CasualLife height={290} />
      </View>

      <View style={styles.buttonsView}>
        <DefaultButton
          bgColor={colors.PRIMARY}
          borderColor={colors.PRIMARY}
          onPress={createFamily}
          title='Create A Family'
          disabled={false}
          textColor={colors.WHITE}
        />
        <DefaultButton
          bgColor={colors.WHITE}
          borderColor={colors.PRIMARY}
          title='Join a Family'
          disabled={false}
          onPress={() => null}
          textColor={colors.PRIMARY}
        />
      </View>
      <BottomPlaceHolder />
    </SafeAreaView>
  );
};
