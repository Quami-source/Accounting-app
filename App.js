import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignScreen from './screens/SignScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f0fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
