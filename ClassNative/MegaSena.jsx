import { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-web'
export default class MegaSena extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     number_quantity: props.numbersQtd
  //   }

  //   this.changeNumberQuantity = this.changeNumberQuantity.bind(this)
  // }

  state = {
    number_quantity: this.props.numbersQtd,
    numbers_generated: []
  }

  changeNumberQuantity = (qtd) => {
    this.setState({ number_quantity: +qtd })
  }

  genNumbers = () => {
    let numbers = Array(this.state.number_quantity).fill()
      .reduce(n => [...n, this.genNewNumber(n)], [])
      .sort((a, b) => a - b)

    this.setState({ numbers_generated: numbers })
  }

  genNewNumber = (nums) => {
    const new_number = Math.floor(Math.random() * 60) + 1
    return nums.includes(new_number) ? this.genNewNumber(nums) : new_number
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
            onChangeText={this.changeNumberQuantity}
            placeholderTextColor='#ccc'
          />
          <Button 
            title='Bet'
            onPress={this.genNumbers}
          />
          <Text>{this.state.numbers_generated.join(',')}</Text>
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
    marginVertical: 20
  }
})