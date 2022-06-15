import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import Display from '../components/Display'
import Button from '../components/Button'

export default function Calculator() {

  const [display_label, setDisplayLabel] = useState(['0'])
  const [first_number, setFirstNumber] = useState(0)
  const [second_number, setSecondNumber] = useState(0)
  const [operation, setOperator] = useState()
  console.log(display_label)

  // useEffect(() => {

  // }, [operation])

  function addDigit(digit){
    // if (display_label[0] == '0' && digit !== ',' && !display_label.includes(',')) {
    //   setDisplayLabel([])
    // }
    // if (digit == ',' && display_label.includes(',')) return 

    // setDisplayLabel(state => [...state, String(digit)])
  }

  function clearMemory(){
    setDisplayLabel('0')
  }

  function setOperation(operator){
    setOperator(operator)
  }

  function solution(){
    // let total = 
  }

  return(
    <View style={styles.calculator}> 
      <Display display_label={display_label}/>
      <View style={styles.buttonsArea}>
        <Button label='AC' bgColor='#aaa' color='#333' onClick={clearMemory}/>
        <Button label='+/-' bgColor='#aaa'/>
        <Button label='%' bgColor='#aaa' color='#333' onClick={setOperation}/>
        <Button label='/' bgColor='#f6971a' onClick={setOperation}/>
        <Button label='7' onClick={addDigit}/>
        <Button label='8' onClick={addDigit}/>
        <Button label='9' onClick={addDigit}/>
        <Button label='*' bgColor='#f6971a' onClick={setOperation}/>
        <Button label='4' onClick={addDigit}/>
        <Button label='5' onClick={addDigit}/>
        <Button label='6' onClick={addDigit}/>
        <Button label='-' bgColor='#f6971a' onClick={setOperation}/>
        <Button label='1' onClick={addDigit}/>
        <Button label='2' onClick={addDigit}/>
        <Button label='3' onClick={addDigit}/>
        <Button label='+' bgColor='#f6971a' onClick={setOperation}/>
        <Button label=',' onClick={addDigit}/>
        <Button label='0' big onClick={addDigit}/>
        <Button label='=' bgColor='#f6971a' onClick={solution}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    backgroundColor: '#111',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingVertical: 30
  },
  buttonsArea: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  }
});