import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './componentStyle';

const CandidateWork = ({work, color}) => {
  const renderItems = () => {
    return work.map(item => {
      return (
        <View
          key={item.institution + item.role}
          style={{alignItems: 'flex-start'}}>
          <Text style={[styles.componentText, styles.componentSubtitle]}>
            {item.institution}
          </Text>
          <Text>{item.role}</Text>
          <Text>{item.dates}</Text>
          {item.public ? (
            <View style={styles.tipbox}>
              <Text style={styles.tipboxText}>CARGO PÚBLICO</Text>
            </View>
          ) : null}
        </View>
      );
    });
  };
  return (
    <Card containerStyle={styles.componentView}>
      <View style={{...styles.componentTitleView, backgroundColor: color}}>
        <Text style={styles.componentTitle}>Trabajo</Text>
      </View>
      {renderItems()}
    </Card>
  );
};

export default CandidateWork;
