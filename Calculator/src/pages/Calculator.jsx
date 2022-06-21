import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import Display from '../components/Display'
import Button from '../components/Button'

export default function Calculator() {

  const [display_label, setDisplayLabel] = useState('0')
  const [values, setValues] = useState(['0','0'])
  const [current, setCurrent] = useState(0)
  const [operation, setOperator] = useState()

  console.log('values', values)
  // console.log(display_label)
  console.log('current', current)
  console.log('operation', operation)

  useEffect(() => {

  }, [operation])

  function addDigit(digit){

    if (digit == '0' && display_label == '0') return
    if (digit == ',' && display_label.includes(',')) return 

    let numbers = [...values]

    if(numbers[current] == '0' && digit !== ',') {
      numbers[current] = ''
    }
    numbers[current] += digit
    
    setValues(numbers)
    setDisplayLabel(numbers[current])
  }

  function clearMemory(){
    setDisplayLabel('0')
    setValues(['0','0'])
    setCurrent(0)
    setOperation('')
  }

  function setOperation(operator){
    if(current === 0 && operator !== '=') {
      setOperator(operator)
      setCurrent(1)
    } 
    else {
      let numbers = [...values]

      if (numbers[1] == '0') {
        numbers[1] = numbers[0]
      }
 
      numbers[0] = parseFloat(numbers[0].replace(',', '.'))
      numbers[1] = parseFloat(numbers[1].replace(',', '.'))
      
      try {
        numbers[0] = eval(`${numbers[0]} ${operation} ${numbers[1]}`)
      } catch (error) {
        numbers[0] = '0'
      }

      numbers[1] = '0'
      numbers[0] = numbers[0].toString().replace('.', ',')

      setDisplayLabel(numbers[0])
      setOperator(operator || null)
      setCurrent(operator == '=' ? 0 : 1)
      setValues(operator == '=' ? ['0','0'] : numbers)
    }
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
})