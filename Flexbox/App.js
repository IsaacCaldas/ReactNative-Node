import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Box/>
    </View>
  );
}

const Box = () => {
  return (
    <View style={styles.box}>
      <Square/>
      <Square color='#a3A'/>
      <Square color='#ddde23'/>
      <Square color='#a3f2ba'/>
      <Square color='#4a33bb'/>
    </View>
  )
}

const Square = ({color}) => {
  return (
    <View style={
      { width: 40, height: 40, 
      backgroundColor: color || '#a33' }
    }/>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  box: {
    backgroundColor: '#555',
    flexGrow: 1,
    justifyContent: 'space-between'
  }
});
