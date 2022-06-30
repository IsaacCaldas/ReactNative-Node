import { StyleSheet, SafeAreaView } from 'react-native'
import 'react-native-gesture-handler'

import Title from '../components/Title'
import NextStack from '../components/NextStack'

export default function Contact({ route }) {

  const { bg_color, txt_color } = route.params

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg_color }]}>
      <Title title='Contact' color={txt_color}/>
      <NextStack back next='Contact' push/>
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
 