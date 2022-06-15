import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <BoxGrow/>
      {/* <Box/> */}
    </View>
  );
}

const Box = () => {
  return (
    <View style={styles.box}>
      {/* <Square side={20}/>
      <Square color='#a3A' side={30}/>
      <Square color='#ddde23' side={60}/>
      <Square color='#a3f2ba' side={40}/>
      <Square color='#4a33bb' side={10}/> */}
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

const BoxGrow = () => {
  return (
    <View style={styles.box}>
      <View style={styles.v0}/>
      <View style={styles.v1}/>
      <View style={styles.v2}/>
    </View>
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
    flex: 1,
    width: 100,
    backgroundColor: '#111'
  },
  v0: {
    backgroundColor: '#f32b3a',
    height: 150,
  },
  v1: {
    backgroundColor: '#3aab32',
    flexGrow: 3,
  },
  v2: {
    backgroundColor: '#3faffc',
    flexGrow: 5,
  }
});
