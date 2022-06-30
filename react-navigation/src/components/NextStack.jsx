import { StyleSheet, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NextStack({back, next}) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.subContent}>
        { back && 
          <Button title='Back' onPress={() => navigation.goBack()}/> }
      </View>
      <View style={styles.subContent}>
        { next && 
          <Button title='Next' onPress={() => navigation.navigate(next)}/> }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subContent: {
    margin: 10
  }
})