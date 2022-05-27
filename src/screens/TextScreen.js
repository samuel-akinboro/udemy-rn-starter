import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextScreen = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput 
        style={styles.textInput} 
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        onChangeText={(inputValue) => setName(inputValue)}
      />
      <Text style={{marginTop: 10}}>Enter Passowrd</Text>
      <TextInput 
        style={styles.textInput} 
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        onChangeText={(inputValue) => setPassword(inputValue)}
      />
      {(password.length > 0 && password.length < 5) &&
          <Text>Passoword should be at least 5 characters </Text>
        }
      <Text style={styles.output}>
        My Name is
        <Text style={styles.highlight}> {name}</Text>
      </Text>
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
  },
  output: {
    fontSize: 40,
    marginTop: 20
  },
  highlight: {
    color: 'orange'
  }
})