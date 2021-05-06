import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.displayText}>Search</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 25,
    }
  });