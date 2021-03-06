import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#a33'
  }
})
