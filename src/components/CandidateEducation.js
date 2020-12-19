import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './componentStyle';

const CandidateEducation = ({education, color}) => {
  const renderItems = () => {
    return education.map(item => {
      return (
        <View key={item.date} style={{alignItems: 'flex-start'}}>
          <Text style={[styles.componentText, styles.componentSubtitle]}>
            {item.institution}
          </Text>
          <Text>{item.title}</Text>
          <Text>{item.date}</Text>
          <Text></Text>
        </View>
      );
    });
  };
  return (
    <Card containerStyle={styles.componentView}>
      <View style={{...styles.componentTitleView, backgroundColor: color}}>
        <Text style={styles.componentTitle}>Educación</Text>
      </View>
      {renderItems()}
    </Card>
  );
};

export default CandidateEducation;
