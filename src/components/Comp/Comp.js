import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Comp = () => {
  return (
    <View>
      <Text><View style={styles.container}>
      <Text style={styles.fruitz}>My hobbies</Text>
      <Text style={styles.word}>
      My name is Bayar. I like to play basketball. My favorite foods are burgers and pizza. I live with my parents and 2 brothers.
      </Text> 
    </View></Text>
    </View>
  )
}

const StyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fruitz: {
fontSize: 100,
color: 'blue'
  }
});

export default Comp

const styles = StyleSheet.create({})