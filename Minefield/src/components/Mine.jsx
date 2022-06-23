import { StyleSheet, View } from 'react-native'
import params from '../utils/params'

const Mine = (status) => {
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
    backgroundColor: '#111',
    height: 12,
    width: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    backgroundColor: '#111',
    height: 3,
    width: 17,
    position: 'absolute'
  }
})