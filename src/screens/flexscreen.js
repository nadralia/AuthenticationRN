import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const FlexScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'silver',
        padding: 50,
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}}>
        <Text>A</Text>
      </View>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}>
        <Text>B</Text>
      </View>
      <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}>
        <Text>C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FlexScreen;
