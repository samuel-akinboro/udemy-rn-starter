import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetails = ({ title, source }) => {
  return (
    <View>
      <Image 
        source={source}
      />
      <Text>{title}</Text>
    </View>
  )
}

export default ImageDetails