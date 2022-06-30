import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../pages/Drawer/Home'
import About from '../pages/Drawer/About'
import Contact from '../pages/Drawer/Contact'

const Drawer = createDrawerNavigator()

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='About' component={About}/>
      <Drawer.Screen name='Contact' component={Contact}/>
    </Drawer.Navigator>
  )
}
