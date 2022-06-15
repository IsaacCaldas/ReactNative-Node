import { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

import NumberBall from './numberBall'

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

  // functional
  genNumbers = () => {
    let numbers = Array(this.state.number_quantity).fill()
      .reduce(n => [...n, this.genNewNumber(n)], [])
      .sort((a, b) => a - b)

    this.setState({ numbers_generated: numbers })
  }

  // procedural
  // genNumbers = () => {
  //   const { number_quantity } = this.state
  //   const numbers = []

  //   for(let i = 0; i < number_quantity; i++) {
  //     const number = this.genNewNumber(numbers)
  //     numbers.push(number)
  //   }

  //   numbers.sort((a, b) => a - b)
  //   this.setState({ numbers_generated: numbers })
  // }

  genNewNumber = (nums) => {
    const new_number = Math.floor(Math.random() * 60) + 1
    return nums.includes(new_number) ? this.genNewNumber(nums) : new_number
  }

  showNumberBalls = () => {
    let numbers = this.state.numbers_generated

    return numbers.map(number => <NumberBall key={number} number={number}/>)
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Mega Sena</Text>
          <Text style={styles.subTitle}>
            Numbers quantity: <Text style={styles.subTitleNumber}>{this.state.number_quantity}</Text>
          </Text>
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
          <View style={styles.ballsContainer}>
            {this.showNumberBalls()}
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },
  title: {
    color: '#eee',
    fontSize: 25,
    fontWeight: 'bold'
  },
  subTitle: {
    color: '#eee',
    fontSize: 18
  },
  subTitleNumber: {
    color: '#0394fc',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: 15,
    height: 40,
    backgroundColor: '#333',
    color: '#ccc',
    borderBottomWidth: 3,
    borderBottomColor: '#0394fc',
    marginVertical: 20
  },
  ballsContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20
  }
})