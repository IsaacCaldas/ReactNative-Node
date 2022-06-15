import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import Display from '../components/Display'
import Button from '../components/Button'

export default function Calculator() {

  const [display_label, setDisplayLabel] = useState('0')
  const [numbers, setNumbers] = useState([0 ,0])
  const [current, setCurrent] = useState(0)
  const [operation, setOperator] = useState()
  console.log(numbers)

  useEffect(() => {
    setDisplayLabel('0')
  }, [operation])

  function addDigit(digit){
    operation ? setCurrent(1) : setCurrent(0)

    if (display_label == '0') {
      if (digit == '0') return

      if (digit !== ',' && !display_label.includes(',')) {
        setDisplayLabel('')
      }
    }
    if (digit == ',' && display_label.includes(',')) return 

    setDisplayLabel(state => state + '' + digit)

    if (digit !== ',') {
      let new_number = parseFloat(display_label)
      let number = [...numbers] 
      number[current] = new_number
      setNumbers(number)
    }
  }

  function clearMemory(){
    setDisplayLabel('0')
    let number = [...numbers] 
    number[0] = 0
    number[1] = 0
    setNumbers(number)
    setCurrent(0)
    setOperation('')
  }

  function setOperation(operator){
    setOperator(operator)
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
        <Button label='=' bgColor='#f6971a' onClick={setOperation}/>
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