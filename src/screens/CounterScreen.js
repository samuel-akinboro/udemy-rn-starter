import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CounterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>0</Text>
      <TouchableOpacity>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // paddingTop: 20,
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 60
  },
  buttonText: {
    fontSize: 20,
    height: 60,
    width: 60,
    backgroundColor: "orange"
  }
})

export default CounterScreen