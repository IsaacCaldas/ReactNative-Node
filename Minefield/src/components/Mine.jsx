import { StyleSheet, View } from 'react-native'
import params from '../utils/params'

const Mine = () => {
  return (
    <View style={styles.mine}>
      <View style={styles.coreMine}/>
      <View style={styles.line}/>
      <View style={[styles.line, {transform: [{rotate: '45deg'}]} ]}/>
      <View style={[styles.line, {transform: [{rotate: '90deg'}]} ]}/>
      <View style={[styles.line, {transform: [{rotate: '135deg'}]} ]}/>
    </View>
  )
}

export default Mine

const styles = StyleSheet.create({
  mine: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  coreMine: {
    backgroundColor: '#141414',
    height: 11,
    width: 11,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  line: {
    backgroundColor: '#111',
    height: 3,
    width: 16,
    position: 'absolute'
  }
})