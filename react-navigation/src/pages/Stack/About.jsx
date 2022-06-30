import { StyleSheet, SafeAreaView } from 'react-native'

import Title from '../../components/Title'
import NextStack from '../../components/NextStack'

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='About'/>
      <NextStack back next='Contact'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#a33a32',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
 