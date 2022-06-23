import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import params from './src/utils/params'

import Field from './src/components/Field';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>mine<Text style={styles.titleSub}>Field</Text></Text> 
      <Text style={styles.gridSize}>
        Grid size: {params.getRowsAmount()}x{params.getColumnsAmount()} 
      </Text> 
      <Field />
      <Field opened nearMines={1} />
      <Field opened nearMines={2}/>
      <Field mined opened blowned />
      <Field />
      <Field opened nearMines={3}/>
      <Field mined />
      <Field opened nearMines={4}/>
      <Field mined opened />
      <Field opened nearMines={6}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    color: '#ebebeb',
    fontWeight: 'bold',
    marginBottom: 10
  },
  titleSub: {
    fontSize: 30,
    color: "#a32a22"
  },
  gridSize: {
    fontSize: 20,
    color: "#ebebeb"
  }
});
