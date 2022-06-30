import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Tab/Home'
import About from '../pages/Tab/About'
import Contact from '../pages/Tab/Contact'

const Tab = createBottomTabNavigator()

export default function TabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#eee',
        inactiveTintColor: '#aaa',
        activeBackgroundColor: '#111',
        inactiveBackgroundColor: '#111',
        labelStyle: { fontSize: 16 }
      }}
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen name='About' component={About}/>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Contact' component={Contact}/>
    </Tab.Navigator>
  )
}
