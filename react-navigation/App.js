import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import Title from './src/components/Title'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Hello World'/>
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 