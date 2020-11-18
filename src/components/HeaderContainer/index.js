import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

const HeaderContainer = ({ title }) => {

  const { goBack } = useNavigation();

  function handleGoBack(){
    goBack();
  }

  return(
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton style={{ padding: 10}} onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>


      {children}
    </View>
  )
}

export default HeaderContainer;