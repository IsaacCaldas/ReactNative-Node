import { useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import Swipeable from 'react-native-gesture-handler/Swipeable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { DELETE_USER } from '../utils/constants'

import UsersContext from '../context/users_context'

export default function UserList({navigation}) {

  const { state, dispatch } = useContext(UsersContext)

  const rightSwipeActions = () => {
    return (
      <View style={styles.rightSwipe}>
        <FontAwesome
          name="trash"
          size={20}
          color="#fff"
        />
      </View>
    )
  }
  
  const deleteUser = (user) => {
    dispatch({
      type: DELETE_USER,
      payload: user
    })
  }

  function userRow({item}) {
    const { id, name, email, img } = item 
    return (
      <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={() => deleteUser(item)}
      >
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
      </Swipeable>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={state.users}
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
  },
  rightSwipe: {
    flex: 1,
    backgroundColor: '#c33333',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15
  }
})
