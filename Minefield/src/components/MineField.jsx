import { StyleSheet, View } from 'react-native'
import Field from './Field'

export default function MineField({board}) {

  const rows = board.map((row, row_id) => {
    const cols = row.map((field, col_id) => {
      return <Field key={col_id} {...field}/>
    })
    return <View style={{ flexDirection: 'row' }} key={row_id}>{cols}</View>
  })

  return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#ded'
  }
})

