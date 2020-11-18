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
      <Text />
    </View>
  )
}

export default HeaderContainer;