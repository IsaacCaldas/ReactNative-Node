import { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native'

const Flag = ({bigger}) => {

  // margin
  const flag_left_margin_top = useRef(new Animated.Value(1.2)).current
  const flag_right_margin_top = useRef(new Animated.Value(1)).current

  const flag_left_margin_left = useRef(new Animated.Value(2)).current
  const flag_right_margin_left = useRef(new Animated.Value(bigger ? 8 : 6)).current
  // width
  const flag_left_width = useRef(new Animated.Value(bigger ? 14 : 5)).current
  const flag_right_width = useRef(new Animated.Value(bigger ? 8 : 3)).current
  // zIndex
  const flag_left_index = useRef(new Animated.Value(2)).current
  // color 
  const flag_left_color = useRef(new Animated.Value(0)).current
  const flagLeftColor = flag_left_color.interpolate({
    inputRange: [0, 1],
    outputRange: ['#e34309', '#f2480a']
  })
  const flag_right_color = useRef(new Animated.Value(0)).current
  const flagRightColor = flag_right_color.interpolate({
    inputRange: [0, 1],
    outputRange: ['#f2480a', '#e34309']
  })
  useEffect(() => {
    flagAnimation()
  },[])

  function flagAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(flag_left_width, {
            toValue: bigger ? 10 : 4,
            duration: 1000
          }),  
          Animated.timing(flag_left_margin_top, {
            toValue: 1,
            duration: 1000
          }),         
          Animated.timing(flag_right_margin_top, {
            toValue: 1.2,
            duration: 1000
          }),
          Animated.timing(flag_left_margin_left, {
            toValue: 3,
            duration: 1000
          }),         
          Animated.timing(flag_left_color, {
            toValue: 1,
            duration: 1000
          }),
          Animated.timing(flag_right_color, {
            toValue: 1,
            duration: 700
          }),
          Animated.timing(flag_left_index, {
            toValue: 100,
            duration: 700
          })
        ]),

        Animated.parallel([
          Animated.timing(flag_left_width, {
            toValue: bigger ? 14 : 5,
            duration: 1000
          }),  
          Animated.timing(flag_left_margin_top, {
            toValue: 1.2,
            duration: 1000
          }),
          Animated.timing(flag_right_margin_top, {
            toValue: 1,
            duration: 1000
          }),
          Animated.timing(flag_left_margin_left, {
            toValue: 2,
            duration: 1000
          }),  
          Animated.timing(flag_left_color, {
            toValue: 0,
            duration: 1000
          }),
          Animated.timing(flag_right_color, {
            toValue: 0,
            duration: 700
          }),
          Animated.timing(flag_left_index, {
            toValue: 2,
            duration: 700
          })
        ])
      ])
    ).start()
  }

  return (
    <View style={styles.flagArea}>
      <View style={[styles.flagPole, bigger && styles.flagPoleBigger]}/>
      <Animated.View style={[
        styles.leftFlag, 
        {
          marginTop: flag_left_margin_top,
          marginLeft: flag_left_margin_left,
          backgroundColor: flagLeftColor,
          width: flag_left_width,
          height: bigger ? 10 : 5
        }
      ]}/>
      <Animated.View style={[
        styles.rightFlag, 
        {
          marginTop: flag_right_margin_top,
          marginLeft: flag_right_margin_left,
          backgroundColor: flagRightColor,
          width: flag_right_width,
          height: bigger ? 10 : 5
        }
      ]}/>
      <View style={[styles.base1, bigger && styles.base1Bigger]}/>
      <View style={[styles.base2, bigger && styles.base2Bigger]}/>
    </View>
  )
}

export default Flag

const styles = StyleSheet.create({
  flagArea: {
    marginTop: 3,
    marginLeft: 1,
  },
  leftFlag: {
    position: 'absolute'
  },
  rightFlag: {
    position: 'absolute'
  },
  flagPole: {
    backgroundColor: '#3b2308',
    position: 'absolute',
    height: 14,
    width: 2,
    marginLeft: 9,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  base1: {
    backgroundColor: '#111',
    position: 'absolute',
    height: 2,
    width: 6,
    marginLeft: 7,
    marginTop: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  base2: {
    backgroundColor: '#111',
    position: 'absolute',
    height: 2,
    width: 10,
    marginLeft: 5,
    marginTop: 12,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  flagPoleBigger: { 
    height: 28,
    width: 4,
    marginLeft: 16
  },
  leftflagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
    backgroundColor: '#e34309'
  },
  rightflagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
    backgroundColor: '#f2480a'
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12
  },
  base2Bigger: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 24
  }
})