import { StyleSheet, SafeAreaView, Button } from 'react-native'
import 'react-native-gesture-handler'

import Title from '../components/Title'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Home'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#a4afe2',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
 