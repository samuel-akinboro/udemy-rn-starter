import { View, FlatList, Button } from 'react-native'
import React from 'react'

const ColorScreen = ({ navigation }) => {
  const [colors, setColors] = React.useState('');

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
  }

  const handleAddColor = () => {
    setColors([...colors, randomRGB()])
  }

  return (
    <View style={{alignItems: 'center'}}>
      <Button 
        title="Add a color" 
        onPress={handleAddColor}
      />
      <FlatList
        numColumns={3}
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: item
            }}
          />
        )}
      />
    </View>
  )
}

export default ColorScreen