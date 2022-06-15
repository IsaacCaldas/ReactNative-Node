import { StyleSheet, View, Text } from 'react-native' 

export default function Display({display_label}) {

  return(
    <View style={styles.display}>
      <Text style={styles.text}>{display_label}</Text>
    </View>
  )
}    

const styles = StyleSheet.create({
  display: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  text: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#e6e6e6'
  }
})
