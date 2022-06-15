import { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class MegaSena extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>Numbers quantity: {this.props.numbersQtd}</Text>
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