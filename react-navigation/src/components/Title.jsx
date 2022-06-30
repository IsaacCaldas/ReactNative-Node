import { StyleSheet, View, Text } from 'react-native'
import 'react-native-gesture-handler';

export default function App({title, color}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color || '#eee'}]}>{title}</Text>
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
    fontSize: 40
  }
});
 