import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import params from './src/utils/params'

import Flag from './src/components/Flag';

import MineField from './src/components/MineField'
import { createMinedBoard } from './src/utils/mineField_logic';

export default function App() {

  const [rows, setRows] = useState(params.getRowsAmount())
  const [cols, setCols] = useState(params.getColumnsAmount())

  const [mines_amount, setMinesAmount] = useState(Math.ceil(cols * rows * params.difficultLevel))
  const [board, setBoard] = useState(createMinedBoard(rows, cols, mines_amount))
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>mine<Text style={styles.titleSub}>Field</Text></Text> 
      <Text style={styles.gridSize}>
        Grid size: {params.getRowsAmount()}x{params.getColumnsAmount()} 
      </Text> 
      <View style={styles.board}>
        <MineField board={board}/>
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
