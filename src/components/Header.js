import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> News App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? '#72bcda' : '#ffffff',
    padding: 15,
    borderBottomColor: Platform.OS === 'android' ? '#ffffff' : '#72bcda',
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    color: Platform.OS === 'android' ? '#ffffff' : '#72bcda',
  },
});

export default Header;