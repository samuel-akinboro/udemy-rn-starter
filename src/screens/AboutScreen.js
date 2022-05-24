import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const AboutScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate('Home')}
    >
      <Text>Go home</Text>
    </TouchableOpacity>
  )
}

export default AboutScreen