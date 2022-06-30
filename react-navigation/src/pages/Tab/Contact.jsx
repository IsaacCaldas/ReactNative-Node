import { StyleSheet, SafeAreaView } from 'react-native'
import 'react-native-gesture-handler'

import Title from '../../components/Title'

export default function Contact() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Contact' color='#eee'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#afaf3b'
  },
})
 