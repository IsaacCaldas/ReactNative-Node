import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Tab/Home'
import About from '../pages/Tab/About'
import Contact from '../pages/Tab/Contact'

import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let icon_name

            switch (route.name) {
              case 'Home':
                icon_name = focused ? 'ios-home' : 'home-outline'
                break;
              case 'About':
                  icon_name = focused ? 'information-circle' : 'information-circle-outline'
                  break;
              case 'Contact':
                icon_name = focused ? 'contacts' : 'contacts-outline'
                break;
            }

            return (
              <>
                { route.name == 'Contact' ?
                    <MaterialCommunityIcons name={icon_name} size={size} color={color}/>
                    : 
                    <IonIcons name={icon_name} size={size} color={color}/>
                }
              </>
            )
          }
        })
      }
      tabBarOptions={{
        activeTintColor: '#eee',
        inactiveTintColor: '#aaa',
        activeBackgroundColor: '#111',
        inactiveBackgroundColor: '#111',
        showLabel: false,
        labelStyle: { fontSize: 16 }
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name='About' component={About}/>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Contact' component={Contact}/>
    </Tab.Navigator>
  )
}
