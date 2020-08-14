import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Card = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/images/onboard_one.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> This is a dummy title</Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.title}> This is a dummy description</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopEndRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  titleWrapper: {
    height: '10%',
    paddingHorizontal: 15,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Card;
