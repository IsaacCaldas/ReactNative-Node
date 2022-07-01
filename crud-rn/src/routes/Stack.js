import { StyleSheet, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home'
import UserForm from '../pages/UserForm'
import UserList from '../pages/UserList'

const Stack = createStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator 
      screenOptions={screenOptions}
      initialRouteName='UserList'
    >
      <Stack.Screen name="UserList" 
        component={UserList}
        options={({navigation}) => {
          return {
            title: 'Users list',
            headerRight: () => (
              <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('UserForm')}
              >
                <IonIcon name='person-add' size={20} color='#efe'/>
              </TouchableOpacity>
            )
          }
        }}
      />
      <Stack.Screen name="UserForm" 
        component={UserForm}
        options={{
          title: "Users form"
        }}
      />
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}

const screenOptions = {
  headerStyle: { 
    backgroundColor: '#4a4',
    elevation: 0
  },
  headerTintColor: '#efe',
  headerTitleStyle: { 
    fontSize: 25,
    fontWeight: 'bold' 
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#efefef44',
    width: 36,
    height: 36,
    borderColor: '#efe',
    borderWidth: 2,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  }
})