import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Display from '../components/Display';
import Button from '../components/Button'

export default function Calculator() {

  const [display_label, setDisplayLabel] = useState(120)

  return(
    <View style={styles.calculator}> 
      <Display display_label={display_label}/>
      <View style={styles.buttonsArea}>
        <Button label='AC' bgColor='#aaa' color='#333'/>
        <Button label='+/-' bgColor='#aaa' color='#333'/>
        <Button label='%' bgColor='#aaa' color='#333'/>
        <Button label='/' bgColor='#f6971a'/>
        <Button label='7'/>
        <Button label='8'/>
        <Button label='9'/>
        <Button label='X' bgColor='#f6971a'/>
        <Button label='4'/>
        <Button label='5'/>
        <Button label='6'/>
        <Button label='-' bgColor='#f6971a'/>
        <Button label='1'/>
        <Button label='2'/>
        <Button label='3'/>
        <Button label='+' bgColor='#f6971a'/>
        <Button label=','/>
        <Button label='0' big />
        <Button label='=' bgColor='#f6971a'/>
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