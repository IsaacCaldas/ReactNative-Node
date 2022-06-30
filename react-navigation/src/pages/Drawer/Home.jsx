import { StyleSheet, SafeAreaView, Button, Text } from 'react-native'

import Title from '../../components/Title'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Home'/>
      <Button title='Open drawer' onPress={() => navigation.openDrawer()}/>
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
 