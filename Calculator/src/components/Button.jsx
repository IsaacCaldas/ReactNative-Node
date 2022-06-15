import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native' 

const device_width = Dimensions.get('window').width

export default function Button({label, onClick, bgColor = '#383941', color = '#e6e6e6', big = false}) {

  return(
    <TouchableHighlight 
      style={[styles.button, { 
        backgroundColor: bgColor,
        width: big ? device_width / 2.5 : device_width / 6,
      }]}
      onPress={onClick}
    >
      <Text style={[styles.text, { color: color }]}>{label}</Text>
    </TouchableHighlight>
  )
}    

const styles = StyleSheet.create({
  button: {
    height: device_width / 6,
    borderRadius: device_width / 3,
    borderWidth: 1,
    borderColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
