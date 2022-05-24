import React from 'react'
import { View } from 'react-native'
import ImageDetails from '../components/ImageDetails'

const ImagesScreen = ({ navigation }) => {
  return (
    <View>
      <ImageDetails />
      <ImageDetails />
    </View>
  )
}

export default ImagesScreen