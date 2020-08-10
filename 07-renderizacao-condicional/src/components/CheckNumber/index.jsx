import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const CheckNumber = ({ number }) => {
  return <View style={styles.container}>{validateNumberIsOddOrEven(number)}</View>;

  function validateNumberIsOddOrEven(number) {
    return number % 2 == 0 ? (
      // Par
      <Text style={styles.text}>The number is odd!</Text>
    ) : (
      // Impar
      <Text style={styles.text}>The number is even!</Text>
    );
  }
};

export default CheckNumber;
