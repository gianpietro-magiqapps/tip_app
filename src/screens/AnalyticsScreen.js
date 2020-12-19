import React, {useContext, useEffect} from 'react';
import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {Context as CandidateContext} from '../context/CandidateContext';
import {Context as PartyContext} from '../context/PartyContext';
import AnalyticsChargesPie from '../components/AnalyticsChargesPie';
import AnalyticsPlansBarChart from '../components/AnalyticsPlansBarChart';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const AnalyticsScreen = () => {
  const {state: candidates, getCandidates} = useContext(CandidateContext);
  const {state: parties, getParties} = useContext(PartyContext);

  useEffect(() => {
    getCandidates();
    getParties();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AnalyticsChargesPie candidates={candidates} parties={parties} />
      <AnalyticsPlansBarChart candidates={candidates} parties={parties} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flex: 1,
  },
});

export default AnalyticsScreen;
