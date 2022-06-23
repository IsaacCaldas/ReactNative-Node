import { StyleSheet, View, Text } from 'react-native'
import params from '../utils/params'

import Mine from './Mine'
import Flag from './Flag'

const Field = (status) => {
  const { mined, opened, nearMines, blowned, flagged } = status

  const styleField = [styles.field]
  // others styles

  if (opened) styleField.push(styles.opened)
  if (blowned) styleField.push(styles.blowned)
  if (flagged) styleField.push(styles.flagged)
  if (!opened) styleField.push(styles.regular)

  let color = null

  switch (nearMines) {
    case 1: 
      color = '#28d74b'
      break
    case 2: 
      color = '#edc602'
      break
    case 3: 
      color = '#f2480a'
      break
    case 4: 
    case 5: 
      color = '#802951'
      break
    default: 
      color = '#164e99'
  } 

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 &&  
          <Text style={[styles.label, { color: color }]}>
            {nearMines}
          </Text>
      }
      { mined && opened && <Mine/>}
      { flagged && !opened && <Flag/> }
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
  label: {
    fontSize: params.fontSize,
    fontWeight: 'bold' 
  },
  regular: {
    backgroundColor: '#404b6e',
    borderTopColor: '#5a6073',
    borderLeftColor: '#5a6073',
    borderBottomColor: '#282d40',
    borderRightColor: '#282d40',
  },
  opened: {
    borderWidth: 3.5,
    backgroundColor: '#8691b5',
    borderTopColor: '#4a5166',
    borderLeftColor: '#4a5166',
    borderBottomColor: '#6b738c',
    borderRightColor: '#6b738c',   
       
    alignItems: 'center',
    justifyContent: 'center'
  },
  blowned: {
    backgroundColor: '#ad5636',
    borderTopColor: '#8f472c',
    borderLeftColor: '#8f472c',
    borderBottomColor: '#96472a',
    borderRightColor: '#96472a'
  },
  flagged: {

  }
})