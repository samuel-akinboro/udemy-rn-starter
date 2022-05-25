import React from 'react'
import { View } from 'react-native'
import ImageDetails from '../components/ImageDetails'

const ImagesScreen = ({ navigation }) => {
  return (
    <View>
      <ImageDetails
        title="Miami"
        source={require('../../assets/mountain.jpg')}
      />
      <ImageDetails
        title="Miami"
        source={require('../../assets/forest.jpg')}
      />
      <ImageDetails
        title="Miami"
        source={require('../../assets/mountain.jpg')}
      />
    </View>
  )
}

export default ImagesScreen