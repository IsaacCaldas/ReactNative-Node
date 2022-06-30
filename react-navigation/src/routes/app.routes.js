import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import StackNav from './Stack'
import TabNav from './Tab'

export default function Routes({nav_type}) {

  function routeStyleChoosed() {
    
    switch (nav_type) {
      case 'stack': 
        return <StackNav/>
      case 'tab': 
        return <TabNav/>
    }

  }

  return (
    <NavigationContainer>
      {routeStyleChoosed()}
    </NavigationContainer>
  )
}