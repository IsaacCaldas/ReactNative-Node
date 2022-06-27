import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Flag from './Flag'

export default function Header({showModal, flagsLeft, onNewGame}){

  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={showModal}
          style={styles.flagButton}
        >
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagLeft}>{flagsLeft}</Text>
      </View>
      <TouchableOpacity styles={styles.button} onPress={onNewGame}>
        <Text styles={styles.buttonLabel}>New Game</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  flagContainer: {
    flexDirection: 'row'
  },
  flagButton: { 
    marginTop: 10,
    minWidth: 30
  },
  flagLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20
  },
  button: {
    backgroundColor: '#666',
    padding: 5
  },
  buttonLabel: {
    fontSize: 20,
    color: '#ddd',
    fontWeight: 'bold'
  }
})