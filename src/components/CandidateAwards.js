import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './componentStyle';

const CandidateAwards = ({awards, color, title}) => {
  const renderItems = () => {
    return awards.map(item => {
      return (
        <View key={item.name + item.date} style={{alignItems: 'flex-start'}}>
          <Text style={[styles.componentText, styles.componentSubtitle]}>
            {item.name}
          </Text>
          <Text>{item.description}</Text>
          <Text>{item.date}</Text>
        </View>
      );
    });
  };
  return (
    <Card containerStyle={styles.componentView}>
      <View style={{...styles.componentTitleView, backgroundColor: color}}>
        <Text style={styles.componentTitle}>{title}</Text>
      </View>
      {renderItems()}
    </Card>
  );
};

export default CandidateAwards;
