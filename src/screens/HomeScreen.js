import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=> navigation.navigate('About')}
        style={styles.button}
      >
        <Text style={styles.text}>Go to About Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Images')}
        style={styles.button}
      >
        <Text style={styles.text}>Go to Gallery Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Counter')}
        style={styles.button}
      >
        <Text style={styles.text}>Go to Counter Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Color')}
        style={styles.button}
      >
        <Text style={styles.text}>Go to Color Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Text')}
        style={styles.button}
      >
        <Text style={styles.text}>Go to Text Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    backgroundColor: 'orange',
    width: '60%',
    marginBottom: 10,
    height: 45,
    justifyContent: 'center',
  }
});

export default HomeScreen;
