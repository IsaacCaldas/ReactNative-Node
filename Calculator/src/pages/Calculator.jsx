import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import Display from '../components/Display'
import Button from '../components/Button'

export default function Calculator() {

  const [display_label, setDisplayLabel] = useState('0')
  const [values, setValues] = useState(['0','0'])
  const [current, setCurrent] = useState(0)
  const [operation, setOperator] = useState()
  const [percentage, setPercentage] = useState(false)

  useEffect(() => {
    if (current == 1 && !operation) {
      setDisplayLabel(values[0])
    } else {
      setDisplayLabel(values[current])
    }
  }, [values])

  console.log(values)

  function addDigit(digit){

    if (display_label == 'Infinity') {
      caseInfinity()
      return 
    }

    if (digit == '0' && display_label == '0') return
    if (digit == ',' && display_label.includes(',')) return 

    let numbers = [...values]

    if(numbers[current] == '0' && digit !== ',') {
      numbers[current] = ''
    }
    numbers[current] += digit
    
    setValues(numbers)
  }

  function setOperation(operator){

    if (display_label == 'Infinity') {
      caseInfinity()
      return 
    }

    if(current === 0 && operator !== '=') {
      setOperator(operator)
      operator == '%' && setPercentage(!percentage)
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
        if (!percentage) {
          if (operator !== '/' && numbers[1] !== '0') {
            numbers[0] = eval(`${numbers[0]} ${operation} ${numbers[1]}`)
          } else {
            caseInfinity()
            return
          }
        } else {
          let total_percentage = (parseFloat(numbers[0])/ 100) * parseFloat(numbers[1])
          console.log(total_percentage)

          if (String(total_percentage).includes('.')) {
            total_percentage = total_percentage.toFixed(1)
            console.log(total_percentage)
          }

          numbers[0] = String(total_percentage) + '%'
          console.log(numbers[0])
        }

      } catch (error) {
        numbers[0] = '0'
      }

      numbers[1] = '0'
      numbers[0] = numbers[0].toString().replace('.', ',')
      setOperator(operator || '')
      setCurrent(operator == '=' ? 0 : 1)
      setValues(numbers)
      setPercentage(percentage && !percentage)
    }
  }

  function clearMemory(){
    setOperator(null)
    setCurrent(0)
    setValues(['0','0'])
  }

  function clearEntry() {
    let numbers = [...values]
    let number_to_remove = [...numbers[current]]
    number_to_remove.pop()
    numbers[current] = number_to_remove.join('') || '0'
    setValues(numbers)
  }

  function caseInfinity() {
    setCurrent(0)
    setValues(['0','0'])
    setOperator(null)
  }

  return(
    <View style={styles.calculator}> 
      <Display display_label={display_label}/>
      <View style={styles.buttonsArea}>

        <Button label='AC' bgColor='#aaa' color='#333' onClick={clearMemory}/>
        <Button label='CE' bgColor='#aaa' color='#333' onClick={clearEntry}/>
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