import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={()=> navigation.navigate('About')}
      >
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Images')}
      >
        <Text style={styles.text}>Images</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
