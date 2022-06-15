import { StyleSheet, View, Text } from 'react-native'

export default function NumberBall({number}) {
  return (
    <View style={styles.ball}>
      <Text style={styles.ballText}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ball: {
    width: '40px',
    height: '40px',
    borderRadius: '20px', 
    backgroundColor: '#0394fc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  ballText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})