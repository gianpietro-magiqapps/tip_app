import React, {useContext, useCallback, useState} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Context as CandidateContext} from '../context/CandidateContext';
import CandidateImage from '../components/CandidateImage';
import CandidateEducation from '../components/CandidateEducation';
import CandidateWork from '../components/CandidateWork';
import CandidateAwards from '../components/CandidateAwards';
import CandidatePlans from '../components/CandidatePlans';
import CandidateCharges from '../components/CandidateCharges';
import ShowImage from '../components/ShowImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWITCHER_SIZE = 0.023 * SCREEN_HEIGHT;

const PartyShowScreen = ({route}) => {
  const {state: candidates, getCandidates} = useContext(CandidateContext);

  const [candidate, setCandidate] = useState(null);

  const [componentIndex, setComponentIndex] = useState(0);

  const partyId = route.params.partyId;

  useFocusEffect(
    useCallback(() => {
      getCandidates();
    }, []),
  );

  const changeComponent = () => {
    const newComponentIndex = componentIndex + 1;
    if (newComponentIndex >= 7) {
      setComponentIndex(0);
    } else setComponentIndex(newComponentIndex);
  };

  const renderCandidate = () => {
    const defaultCandidate = filteredCandidates.find(
      c => c.role === 'Presidente',
    );
    const item = candidate ? candidate : setCandidate(defaultCandidate);
    return item ? (
      <TouchableOpacity onPress={changeComponent} style={styles.detailView}>
        {componentIndex === 0 ? <CandidateImage item={item} /> : null}
        {componentIndex === 1 ? (
          <CandidatePlans color={item.party.color} plans={item.party.plans} />
        ) : null}
        {componentIndex === 2 ? (
          <CandidateEducation
            education={item.education}
            color={item.party.color}
          />
        ) : null}
        {componentIndex === 3 ? (
          <CandidateWork work={item.work} color={item.party.color} />
        ) : null}
        {componentIndex === 4 ? (
          <CandidateAwards
            awards={item.awards}
            color={item.party.color}
            title={'Distinciones'}
          />
        ) : null}
        {componentIndex === 5 ? (
          <CandidateAwards
            awards={item.achievements}
            color={item.party.color}
            title={'Logros'}
          />
        ) : null}
        {componentIndex === 6 ? (
          <CandidateCharges color={item.party.color} charges={item.charges} />
        ) : null}
      </TouchableOpacity>
    ) : null;
  };

  const renderMember = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.listView,
          backgroundColor:
            candidate && candidate._id === item._id ? '#f0f0f0' : 'white',
        }}
        onPress={() => setCandidate(item)}>
        <ShowImage
          url={item.image}
          width={0.1 * SCREEN_WIDTH}
          height={0.1 * SCREEN_WIDTH}
        />
        <View style={styles.listTextView}>
          <Text
            style={{
              ...styles.listTitle,
              fontWeight:
                candidate && candidate._id === item._id ? 'bold' : 'normal',
            }}>
            {item.name}
          </Text>
          <Text style={styles.listSubtitle}>{item.role}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMembers = () => {
    return (
      <View style={{marginTop: 20}}>
        <FlatList
          data={filteredCandidates}
          keyExtractor={item => item._id}
          renderItem={renderMember}
        />
      </View>
    );
  };

  const renderSwitch = (activeComponentIndex, iconName) => {
    return (
      <TouchableOpacity
        style={styles.switcher}
        onPress={() => setComponentIndex(activeComponentIndex)}>
        <FontAwesome
          name={iconName}
          size={1.5 * SWITCHER_SIZE}
          color={componentIndex === activeComponentIndex ? 'black' : 'grey'}
        />
        {/* <View
          style={{
            ...styles.switcher,
            backgroundColor:
              componentIndex === activeComponentIndex ? 'grey' : 'white',
          }}></View> */}
      </TouchableOpacity>
    );
  };

  const renderSwitchers = () => {
    return (
      <View style={styles.switchers}>
        {renderSwitch(0, 'user-circle')}
        {renderSwitch(1, 'line-chart')}
        {renderSwitch(2, 'graduation-cap')}
        {renderSwitch(3, 'briefcase')}
        {renderSwitch(4, 'star')}
        {renderSwitch(5, 'thumbs-o-up')}
        {renderSwitch(6, 'thumbs-o-down')}
      </View>
    );
  };

  const filteredCandidates =
    candidates && candidates.length
      ? candidates.filter(c => c.party._id === partyId).reverse()
      : [];

  return (
    <SafeAreaView style={styles.container}>
      {filteredCandidates && filteredCandidates.length ? (
        <View style={{flexDirection: 'column'}}>
          {renderCandidate()}
          {renderSwitchers()}
          {renderMembers()}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  detailView: {
    width: 0.9 * SCREEN_WIDTH,
    height: 0.9 * SCREEN_WIDTH,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  listView: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    width: 0.9 * SCREEN_WIDTH,
  },
  listTextView: {
    marginLeft: 5,
  },
  listTitle: {},
  listSubtitle: {
    color: 'grey',
  },
  switchers: {
    marginTop: 1.5 * SWITCHER_SIZE,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  switcher: {
    borderRadius: 0.5 * SWITCHER_SIZE,
    marginHorizontal: 0.02 * SCREEN_WIDTH,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.65,
    elevation: 8,
  },
});

export default PartyShowScreen;
