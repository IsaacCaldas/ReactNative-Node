import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native'

export default function LevelSelection({visible, onCancel, levelSelected}) {

  return (
    <Modal
      onRequestClose={onCancel}
      visible={visible}
      animationType='slide'
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Level selection</Text>
          <TouchableOpacity 
            style={[styles.button, styles.bgEasy]}
            onPress={() => levelSelected(0.1)}
          >
            <Text style={styles.buttonTxt}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.bgMedium]}
            onPress={() => levelSelected(0.2)}
          >
            <Text style={styles.buttonTxt}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.bgHard]}
            onPress={() => levelSelected(0.3)}
          >
            <Text style={styles.buttonTxt}>Hard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  container: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#efe'
  },
  button: {
    marginTop: 10,
    padding: 5,
    width: '100%',
    alignItems: 'center'
  },
  buttonTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  bgEasy: {
    backgroundColor: '#77eb34'
  },
  bgMedium: {
    backgroundColor: '#edaa0e'
  },
  bgHard: {
    backgroundColor: '#db2912'
  }
})