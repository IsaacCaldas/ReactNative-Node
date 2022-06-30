import { StyleSheet, SafeAreaView } from 'react-native'

import Title from '../components/Title'
import NextStack from '../components/NextStack'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Home'/>
      <NextStack next='About'/>
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
  }
})
 