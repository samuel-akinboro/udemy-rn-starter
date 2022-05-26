import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CounterScreen = ({ navigation }) => {
  const [value, setValue] = React.useState(0)

  const increment = () => {
    setValue(prevState => prevState + 1)
  }

  const decrement = () => {
    if(value > 0) {
      setValue(prevState => prevState - 1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => decrement()}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => increment()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 160
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 180,
    justifyContent: 'space-between',
    marginTop: 100
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonText: {
    fontSize: 30,
    color: 'white'
  }
})

export default CounterScreen