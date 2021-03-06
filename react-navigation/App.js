import { useState, useEffect } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import 'react-native-gesture-handler';

import Routes from './src/routes/app.routes'
import Title from './src/components/Title'

export default function App() {
  
  const [nav_type, setNavType] = useState()

  return (
    <>
      { !nav_type && 
        <View style={styles.container}>
          <View style={styles.btnArea}>
            <View style={styles.titleArea}><Title title='Choose your navigation'/></View>
            <View style={styles.btn}>
              <Button title='Stack Navigation' onPress={() => setNavType('stack')}/>
            </View>
            <View style={styles.btn}>
              <Button title='Tab Navigation' onPress={() => setNavType('tab')}/>
            </View>
            <View style={styles.btn}>
              <Button title='Drawer Navigation' onPress={() => setNavType('drawer')}/>
            </View>
          </View>
        </View>
      }
      { nav_type && <Routes nav_type={nav_type} /> }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    flexDirection: 'row'
  },
  titleArea: {
    textAlign: 'center',
    marginBottom: 20
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  btn: {
    width: '100%',
    marginBottom: 5
  }
}) 