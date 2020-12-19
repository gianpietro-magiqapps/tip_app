import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './componentStyle';

const CandidatePlans = ({plans, color}) => {
  const groupPlans = plans.reduce((r, a) => {
    r[a.topic] = [...(r[a.topic] || []), a];
    return r;
  }, {});

  const renderItems = () => {
    let output = [];
    for (const topic in groupPlans) {
      output.push(
        <View key={topic}>
          <Text style={[styles.componentText, styles.componentSubtitle]}>
            {topic}
          </Text>
          {groupPlans[topic].map(planItem => {
            return (
              <Text key={planItem.plan}>
                {'\u2022 '}
                {planItem.plan}
              </Text>
            );
          })}
        </View>,
      );
    }
    return output;
  };

  return (
    <Card containerStyle={styles.componentView}>
      <View style={{...styles.componentTitleView, backgroundColor: color}}>
        <Text style={styles.componentTitle}>Planes de Gobierno (Partido)</Text>
      </View>
      {renderItems()}
    </Card>
  );
};

export default CandidatePlans;
