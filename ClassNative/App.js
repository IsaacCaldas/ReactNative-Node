import { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MegaSena from './MegaSena'

export default class Mega extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MegaSena numbersQtd={7}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})