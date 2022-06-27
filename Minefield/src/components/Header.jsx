import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Flag from './Flag'

export default function Header({showModal, flagsLeft, onNewGame}){

  return (
    <View style={styles.container}>
      <View  style={styles.titleArea}>
        <Text style={styles.title}>
          mine<Text style={styles.titleSub}>Field</Text>
        </Text> 
        <TouchableOpacity style={styles.newGameBtn} onPress={onNewGame}>
          <Text style={styles.buttonLabel}>New Game</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flagContainer}>
        <TouchableOpacity style={styles.flagButton} onPress={showModal}>
          <Flag bigger/>
        </TouchableOpacity>
        <Text style={styles.flagLeft}>{flagsLeft}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 10
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },  
  title: {
    fontSize: 38,
    color: '#ebebeb',
    fontWeight: 'bold',
  },
  titleSub: {
    fontSize: 30,
    color: "#f2480a"
  },
  newGameBtn: {
    backgroundColor: '#f2480a',
    padding: 5,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  buttonLabel: {
    fontSize: 20,
    color: '#ebebeb',
    fontWeight: 'bold'
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
    marginLeft: 10,
    color: "#ebebeb"
  }
})