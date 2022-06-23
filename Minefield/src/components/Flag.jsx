import { StyleSheet, View } from 'react-native'

const Flag = () => {
  return (
    <View style={styles.flagArea}>
      <View style={styles.flagPole} />
      <View style={styles.flag} />
      <View style={styles.base1} />
      <View style={styles.base2} />
    </View>
  )
}

export default Flag

const styles = StyleSheet.create({
  flagArea: {
    marginTop: 3,
    marginLeft: 1,
  },
  flag: {
    backgroundColor: '#f2480a',
    position: 'absolute',
    height: 5,
    width: 6,
    marginLeft: 3,
    marginTop: 1
  },
  flagPole: {
    backgroundColor: '#3b2308',
    position: 'absolute',
    height: 14,
    width: 2,
    marginLeft: 9,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  base1: {
    backgroundColor: '#111',
    position: 'absolute',
    height: 2,
    width: 6,
    marginLeft: 7,
    marginTop: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  base2: {
    backgroundColor: '#111',
    position: 'absolute',
    height: 2,
    width: 10,
    marginLeft: 5,
    marginTop: 12,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  }
})