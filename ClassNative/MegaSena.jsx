import { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
export default class MegaSena extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     number_quantity: props.numbersQtd
  //   }

  //   this.changeNumberQuantity = this.changeNumberQuantity.bind(this)
  // }

  state = {
    number_quantity: this.props.numbersQtd
  }

  changeNumberQuantity(qtd) {
    this.setState({ number_quantity: qtd })
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Mega Sena</Text>
          <Text>Numbers quantity: {this.state.number_quantity}</Text>
          <TextInput 
            keyboardType='numeric'
            style={styles.input}
            placeholder='Enter a number quantity'
            value={this.state.number_quantity}
            onChangeText={(qtd) => this.changeNumberQuantity(qtd)}
            placeholderTextColor='#ccc'
          />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    padding: 15,
    height: 40,
    backgroundColor: '#222',
    color: '#ccc',
    borderBottomWidth: 3,
    borderBottomColor: '#3e2',
    marginTop: 20
  }
})