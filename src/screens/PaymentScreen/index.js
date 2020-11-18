import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </SafeAreaView>
  );
}

export default PaymentScreen;