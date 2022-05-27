import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Enter Name Below</Text>
      <TextInput 
        style={styles.textInput} 
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 5,
    marginTop: 5
  }
})