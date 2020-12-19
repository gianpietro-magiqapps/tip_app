import React, {useContext, useEffect, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import {Context as PartyContext} from '../context/PartyContext';
import {Context as CandidateContext} from '../context/CandidateContext';
import ShowImage from '../components/ShowImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const PartyListScreen = ({navigation}) => {
  const {state: parties, getParties} = useContext(PartyContext);
  const {resetCandidates} = useContext(CandidateContext);

  useEffect(() => {
    getParties();
  }, []);

  useFocusEffect(
    useCallback(() => {
      resetCandidates();
    }, []),
  );

  const renderParty = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: 0}}
        onPress={() => {
          navigation.navigate('PartyShowScreen', {
            partyId: item._id,
            partyName: item.name,
          });
        }}>
        <Card
          containerStyle={{marginHorizontal: 5, backgroundColor: '#fafafa'}}>
          <ShowImage
            url={item.image}
            width={0.38 * SCREEN_WIDTH}
            height={0.38 * SCREEN_WIDTH}
          />
          <View style={styles.floatingView}>
            <Text style={styles.floatingViewText}>{item.name}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  const renderParties = () => {
    return (
      <View style={{marginTop: 10}}>
        <FlatList
          data={parties}
          numColumns={2}
          keyExtractor={item => item._id}
          renderItem={renderParty}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>{renderParties()}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.7,
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

export default PartyListScreen;
