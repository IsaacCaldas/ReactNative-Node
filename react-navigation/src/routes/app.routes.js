import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import StackNav from './Stack'

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  )
}