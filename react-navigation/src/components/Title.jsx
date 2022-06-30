import { StyleSheet, View, Text } from 'react-native'
import 'react-native-gesture-handler';

export default function App({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}!</Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#eee'
  }
});
 