import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Stack = createStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='About' component={About}/>
      <Stack.Screen name='Contact' component={Contact}/>
    </Stack.Navigator>
  )
}
