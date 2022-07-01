import { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Image, 
  Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'

export default function UserForm({ route }) {
  const item = route.params?.item
  const img_default = 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397_960_720.png'

  const [load, setLoad] = useState(false)
  const [filled, setFilled] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [imgLink, setImgLink] = useState(img_default)

  useEffect(() => {
    item && setName(item.name)
    item && setEmail(item.email)
    item && setImgLink(item.img) 
  }, [])

  useEffect(() => {
    name && email ? setFilled(true) : setFilled(false)
  }, [name, email])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.userImage}
          source={{uri: imgLink}}
        />
        <TextInput
          style={styles.input}
          value={name}
          placeholder={'Enter a name'}
          placeholderTextColor="#eee"
          onChangeText={(text) => setName(text)}
          editable={!load}
        />
        <TextInput
          style={styles.input}
          value={email}
          placeholder={'Enter a email'}
          placeholderTextColor="#eee"
          onChangeText={(text) => setEmail(text)}
          editable={!load}
        />
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: filled ? '#4a4' : '#4a47' }]}
          onPress={() => setLoad(!load)}
          disabled={!filled}
        >
          { load ?
              <ActivityIndicator size='small' color='#eee'/>
            :
              <Text style={styles.textButton}>{item ? 'Update' : 'Create'}</Text>
          }
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#1a1a1a'
  },
  form: {
    width: '90%',
    height: '70%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 5,
    backgroundColor: '#111'
  },
  button: {
    width: '85%',
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 25
  },
  textButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#eee'
  },
  input: {
    width: '85%',
    height: 50,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#1a1a1a',
    marginBottom: 20,
    fontSize: 16,
    color: '#eee'
  },  
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 60,
    marginBottom: 25
  }
})
