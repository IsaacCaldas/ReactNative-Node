import { StyleSheet, View } from 'react-native'
import params from '../utils/params'

const Field = () => {
  const styleField = [styles.field]
  // others styles
  if (styleField.length === 1) styleField.push(styles.regular)

  return (
    <View style={styleField}>
    </View>
  )
}

export default Field

const styles = StyleSheet.create({
  field: {
    width: params.blockSize,
    height: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#404b6e',
    borderTopColor: '#5a6073',
    borderLeftColor: '#5a6073',
    borderBottomColor: '#282d40',
    borderRightColor: '#282d40',
  }
})