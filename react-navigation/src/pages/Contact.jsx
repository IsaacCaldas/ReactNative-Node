import { StyleSheet, SafeAreaView, Button } from 'react-native'
import 'react-native-gesture-handler'

import Title from '../components/Title'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Contact'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#33a23e',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
 