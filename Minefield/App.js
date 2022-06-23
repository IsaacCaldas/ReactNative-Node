import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import params from './src/utils/params'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>mine<Text style={styles.titleSub}>Field</Text></Text> 
      <Text style={styles.gridSize}>
        Grid size: {params.getRowsAmount()}x{params.getColumnsAmount()} 
      </Text> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
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
