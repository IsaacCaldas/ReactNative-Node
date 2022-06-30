import { StyleSheet, SafeAreaView } from 'react-native'
import 'react-native-gesture-handler'

import Title from '../../components/Title'
import NextStack from '../../components/NextStack'

export default function Contact() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg_color }]}>
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
  },
})
 