import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Stack/Home'
import About from '../pages/Stack/About'
import Contact from '../pages/Stack/Contact'

const Stack = createStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName='Home'
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen name='Home' component={Home}
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='About' component={About}
        options={{
          title: 'Meet us'
        }}
      />
      <Stack.Screen name='Contact' component={Contact}/>
    </Stack.Navigator>
  )
}
