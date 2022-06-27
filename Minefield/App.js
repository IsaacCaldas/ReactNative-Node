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
  const [stop_game, setStop] = useState()
  const [visible, setVisible] = useState(false)

  const [rows, setRows] = useState(params.getRowsAmount())
  const [cols, setCols] = useState(params.getColumnsAmount())

  const [mines_amount, setMinesAmount] = useState(Math.ceil(cols * rows * params.difficultLevel))
  const [board, setBoard] = useState()

  useEffect(() => {
    setMinesAmount(mines_amount)
    setBoard(createMinedBoard(rows, cols, mines_amount))
  }, [])

  useEffect(() => {
    won_game || lost_game && setStop(true)
  }, [won_game, lost_game])
  
  const newGame =() => {
    setRows(params.getRowsAmount())
    setCols(params.getColumnsAmount())
    setMinesAmount(mines_amount)
    setBoard(createMinedBoard(rows, cols, mines_amount))
    setWon(false)
    setLost(false)
    setStop(null)
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
    setVisible(false)
    newGame()
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
      <View style={styles.board}>
        {board && 
          <MineField board={board} 
            onOpenField={onOpenField} 
            onSelectField={onSelectField}
            stop_game={stop_game}
          />
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
  gridSize: {
    fontSize: 20,
    color: "#ebebeb"
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#222'
  }
});
