import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native' 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'

const device_width = Dimensions.get('window').width

export default function Button({label, onClick, bgColor = '#383941', color = '#e6e6e6', big = false}) {

  function setOperatorIcon() {
    switch (label) {
      case '/': 
        return <FontAwesome5 name="divide" size={25} color="#e6e6e6" />
      case '*': 
        return <Ionicons name="close" size={35} color="#e6e6e6" />
      case '-': 
        return <FontAwesome name="minus" size={25} color="#e6e6e6" />
      case '+': 
        return <FontAwesome name="plus" size={25} color="#e6e6e6" />
      case '=': 
        return <FontAwesome5 name="equals" size={25} color="#e6e6e6" />
      case '+/-': 
        return <MaterialCommunityIcons name="plus-minus-variant" size={30} color="#333" />
      default: 
        return label
    }
  }

  return(
    <TouchableHighlight 
      style={[styles.button, { 
        backgroundColor: bgColor,
        width: big ? device_width / 2.5 : device_width / 6,
      }]}
      onPress={() => onClick(label)}
    >
      <Text style={[styles.text, { color: color }]}>{setOperatorIcon()}</Text>
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
