import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native'
import params from './src/utils/params'

import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/pages/LevelSelection'

import { 
  createMinedBoard, cloneBoard, openField, fieldBlowned, 
  wonGame, showMines, invertFlag, flagsUsed } from './src/utils/mineField_logic';

export default function App() {
  
  const [won_game, setWon] = useState(false)
  const [lost_game, setLost] = useState(false)
  const [visible, setVisible] = useState(false)

  const [rows, setRows] = useState(params.getRowsAmount())
  const [cols, setCols] = useState(params.getColumnsAmount())

  const [mines_amount, setMinesAmount] = useState(Math.ceil(cols * rows * params.difficultLevel))
  const [board, setBoard] = useState()
  

  useEffect(() => {
    setMinesAmount(mines_amount)
    setBoard(createMinedBoard(rows, cols, mines_amount))
  }, [])
  
  const newGame =() => {
    setRows(params.getRowsAmount())
    setCols(params.getColsAmount())
    setMinesAmount(mines_amount)
    setBoard(createMinedBoard(rows, cols, mines_amount))
    setNewGame(false)
    setWon(false)
    setLost(false)
  }

  const onOpenField = (board_, row, col) => {
    const board = cloneBoard(board_)
    openField(board, row, col)
    
    let lost = fieldBlowned(board)
    let won = wonGame(board)

    if (lost) {
      showMines(board)
      alert('You lost the game! 😞')
    } 
    if(won) alert('You won the game! 😀')
    
    setLost(lost)
    setWon(won)

    setBoard(board)
  }

  const onSelectField = (board_, row, col) => {
    const board = cloneBoard(board_)
    invertFlag(board, row, col)

    const won = wonGame(board)
    if (won) alert('You won the game! 😀')

    setBoard(board)
    setWon(won)
  }

  const levelSelected = level => {
    params.difficultLevel = level
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <LevelSelection visible={visible} 
        levelSelected={levelSelected} 
        onCancel={() => setVisible(false)}
      />
      {board && 
        <Header 
          flagsLeft={mines_amount - flagsUsed(board)}
          onNewGame={() => newGame()}
          showModal={() => setVisible(true)}
        />
      }
      <Text style={styles.title}>mine<Text style={styles.titleSub}>Field</Text></Text> 
      <View style={styles.board}>
        {board && <MineField board={board} 
          onOpenField={onOpenField} 
          onSelectField={onSelectField} />
        }
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
