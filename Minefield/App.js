import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import params from './src/utils/params'

import Flag from './src/components/Flag';

import MineField from './src/components/MineField'
import { 
  createMinedBoard, cloneBoard, openField, 
  fieldBlowned, wonGame, showMines } from './src/utils/mineField_logic';

export default function App() {

  const [won_game, setWon] = useState(false)
  const [lost_game, setLost] = useState(false)

  const [rows, setRows] = useState(params.getRowsAmount())
  const [cols, setCols] = useState(params.getColumnsAmount())

  const [mines_amount, setMinesAmount] = useState(Math.ceil(cols * rows * params.difficultLevel))
  const [board, setBoard] = useState(createMinedBoard(rows, cols, mines_amount))

  const onOpenField = (row, col) => {
    const board = cloneBoard(board)
    openField(board, row, col)
    
    let lost = fieldBlowned(board)
    let won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('You lost the game! 😞')
    } 

    if(won) Alert.alert('You won the game! 😀')
    
    setLost(lost)
    setWon(won)

    setBoard(board)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>mine<Text style={styles.titleSub}>Field</Text></Text> 
      <Text style={styles.gridSize}>
        Grid size: {params.getRowsAmount()}x{params.getColumnsAmount()} 
      </Text> 
      <View style={styles.board}>
        <MineField board={board} onOpenField={onOpenField}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 38,
    color: '#ebebeb',
    fontWeight: 'bold',
    marginBottom: 10
  },
  titleSub: {
    fontSize: 30,
    color: "#f2480a"
  },
  gridSize: {
    fontSize: 20,
    color: "#ebebeb"
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#222'
  }
});
