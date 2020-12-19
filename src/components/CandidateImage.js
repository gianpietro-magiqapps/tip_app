import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import ShowImage from './ShowImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const CandidateImage = ({item}) => {
  return (
    <>
      <ShowImage
        url={item.image}
        width={0.9 * SCREEN_WIDTH}
        height={0.9 * SCREEN_WIDTH}
      />
      <View style={{...styles.floatingView, backgroundColor: item.party.color}}>
        <Text style={styles.floatingViewText}>{item.name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  floatingView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.8,
    height: 50,
    justifyContent: 'center',
    padding: 5,
  },
  floatingViewText: {
    color: 'white',
    fontSize: SCREEN_HEIGHT * 0.018,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CandidateImage;
