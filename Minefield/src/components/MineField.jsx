import { StyleSheet, View } from 'react-native'
import Field from './Field'

export default function MineField({board, onOpenField, onSelectField, stop_game}) {

  const onOpen = (row, col) => {
    !stop_game && onOpenField(board, row, col)
  }
  const onSelect = (row, col) => {
    !stop_game && onSelectField(board, row, col)
  }

  const rows = board.map((row, row_id) => {
    const cols = row.map((field, col_id) => {
      return <Field key={col_id} {...field}
        onOpen={() => onOpen(row_id, col_id)}
        onSelect={() => onSelect(row_id, col_id)}
      />
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

