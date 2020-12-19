import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './componentStyle';

const CandidateCharges = ({charges, color}) => {
  const renderItems = () => {
    return charges.map(item => {
      return (
        <View key={item.reason + item.date} style={{alignItems: 'flex-start'}}>
          <Text style={[styles.componentText, styles.componentSubtitle]}>
            {item.reason}
          </Text>
          <Text>{item.date}</Text>
          <Text>{item.status}</Text>
        </View>
      );
    });
  };
  return (
    <Card containerStyle={styles.componentView}>
      <View style={{...styles.componentTitleView, backgroundColor: color}}>
        <Text style={styles.componentTitle}>Denuncias Penales</Text>
      </View>
      {renderItems()}
    </Card>
  );
};

export default CandidateCharges;
