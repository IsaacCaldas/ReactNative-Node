import { useState, useEffect } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NextStack({back, next, push}) {

  const navigation = useNavigation()

  const [bg_color, setBgColor] = useState()
  const [txt_color, setTxtColor] = useState()

  useEffect(() => {
    colorPicker()
  }, [])

  useEffect(() => {
    if (bg_color) txtColorPicker()
  }, [bg_color])

  function colorPicker() {
    let hex = (Math.random() * 0xfffff * 1000000).toString(16);
    setBgColor('#' + hex.slice(0, 6))
  }

  function txtColorPicker() {
    let hex_without_hash = bg_color.replace('#', '') || '#eee'
  
    const R = parseInt(hex_without_hash.substr(0, 2), 16)
    const G = parseInt(hex_without_hash.substr(2, 2), 16)
    const B = parseInt(hex_without_hash.substr(4, 2), 16)

    let luminosity = (R * 299 + G * 587 + B * 114) / 1000
    setTxtColor(luminosity > 127 ? '#111' : '#eee')
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContent}>
        { back && 
          <Button title='Back' onPress={() => navigation.goBack()}/> }
      </View>
      <View style={styles.subContent}>
        { next && !push && bg_color && txt_color && 
          <Button title='Next' onPress={() => navigation.navigate(next, {
            bg_color,
            txt_color
          })
        }/> }
        { next && push && bg_color && txt_color && 
           <Button title='Next' onPress={() => navigation.push(next, {
            bg_color,
            txt_color
          })
        }/> }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subContent: {
    margin: 10
  }
})