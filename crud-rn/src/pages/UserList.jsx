import { StyleSheet, SafeAreaView, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import users from '../data/users'

export default function UserList({navigation}) {

  function userRow({item}) {
    const { id, name, email, img } = item 
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('UserForm', { item })}
      >
        <View style={styles.row} key={id}>
          <Image
            style={styles.userImage}
            source={{uri: img}}
          />
          <Text style={styles.textName}>
            {name} | <Text style={styles.textEmail}>{email}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={userRow}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111'
  },
  row: {
    backgroundColor: '#1a1a1a',
    width: '100%',
    height: 80,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#333',
    borderBottomWidth: 2
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  textName: {
    fontSize: 18,
    color: '#eee'
  },
  textEmail: {
    color: '#4a4',
    fontWeight: 'bold'
  }
})
