import { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native' 

export default function Display({display_label}) {

  const [size, setSize] = useState(55)
  const [label, setLabel] = useState()

  useEffect(() => {
    let arr_length = display_label.length
    arr_length > 9 ? setSize(40) : setSize(55)

    if (display_label.includes('e+')) {

      let index = display_label.indexOf('e')
      let last_index = display_label.length - 1

      let arr_exp = display_label.slice(index, last_index)
      let expo_number = display_label.slice(0, 10)

      setLabel(expo_number + '' + arr_exp)

    } else {
      setLabel(display_label.slice(0, 13))
    }

  }, [display_label])

  return(
    <View style={styles.display}>
      <Text style={[styles.text, { fontSize: size }]}>{label}</Text>
    </View>
  )
}    

const styles = StyleSheet.create({
  display: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  text: {
    fontWeight: 'bold',
    color: '#e6e6e6'
  }
})
