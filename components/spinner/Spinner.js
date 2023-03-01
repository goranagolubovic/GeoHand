import React from 'react'
import { View, ActivityIndicator } from 'react-native';
import styles from './Spinner.style';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffe2c8" />
    </View>
  )
}

export default Spinner
