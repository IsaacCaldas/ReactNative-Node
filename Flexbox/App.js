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
      <Square side={20}/>
      <Square color='#a3A' side={30}/>
      <Square color='#ddde23' side={60}/>
      <Square color='#a3f2ba' side={40}/>
      <Square color='#4a33bb' side={10}/>
    </View>
  )
}

const Square = ({color, side}) => {
  return (
    <View style={
      { width: side, //height: side, 
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
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    width: '100%',
    height: 400,
    backgroundColor: '#111'
  }
});
