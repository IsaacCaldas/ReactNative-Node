import { StyleSheet, SafeAreaView } from 'react-native'
import 'react-native-gesture-handler'

import Title from '../components/Title'
import NextStack from '../components/NextStack'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Contact'/>
      <NextStack back next='Home'/>
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
 