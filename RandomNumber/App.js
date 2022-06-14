import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [disabled, setDisabled] = useState(true)

  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [randomNumber, setRandomNumber] = useState()

  useEffect(() => {
    min && max ? setDisabled(false) : setDisabled(true)
  }, [min, max])

  function randomize() {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    setRandomNumber(random)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Number</Text>
      <View style={styles.inputArea}>
        { randomNumber &&
          <View style={styles.display}>
            <Text style={styles.textDisplay}>
              The number: <Text style={styles.numberRandom}>{randomNumber}</Text>
            </Text>
          </View>
        }
        <TextInput
          style={styles.input}
          placeholderTextColor='#efe'
          placeholder='Enter the min number'
          onChangeText={(text) => setMin(text)}
          value={min}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='#efe'
          placeholder='Enter the max number'
          onChangeText={(text) => setMax(text)}
          value={max}
        />
        <TouchableOpacity
          disabled={disabled}
          onPress={() => randomize()}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Random!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#b2fa3a',
    fontWeight: 'bold'
  },
  inputArea: {
    width: '90%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    margin: 20,
    borderRadius: 5
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#555',
    margin: 10,
    color: '#efe',
    borderRadius: 5
  },
  btn: {
    width: '100%',
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b0ee11',
    borderRadius: 5,
    marginTop: 20
  },
  btnText: {
    fontSize: 25,
    color: '#efe',
    fontWeight: 'bold'
  },
  display: {
    width: '100%',
    backgroundColor: '#222',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textDisplay: {
    fontSize: 18,
    color: '#efe',
    fontWeight: 'bold'
  }, 
  numberRandom: {
    color: '#b2fa3a',
  }
});
