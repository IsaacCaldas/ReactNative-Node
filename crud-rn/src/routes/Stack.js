import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home'

const Stack = createStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Stack name="Home" component={Home}/>
    </Stack.Navigator>
  )
}