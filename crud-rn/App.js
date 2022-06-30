import { StyleSheet, SafeAreaView } from 'react-native'
import 'react-native-gesture-handler'

import Routes from './src/routes/app.routes'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
