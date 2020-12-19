import React, {useState, useCallback} from 'react';
import {Text, StyleSheet, Dimensions, processColor} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';
import {useFocusEffect} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const AnalyticsChargesPie = ({parties}) => {
  const groupPlans = plans => {
    plans.reduce((r, a) => {
      r[a.topic] = [...(r[a.topic] || []), a];
      return r;
    }, {});
  };

  const [charges, setCharges] = useState([]);
  const [colors, setColors] = useState([]);

  useFocusEffect(useCallback(() => {}));

  const calculatePlans = parties => {};

  return (
    <>
      <Text style={styles.chartTitle}>PLANES POR PARTIDO</Text>
      <BarChart
        style={styles.chart}
        legend={{
          enabled: true,
          textSize: 14,
          form: 'SQUARE',
          formSize: 14,
          xEntrySpace: 10,
          yEntrySpace: 5,
          wordWrapEnabled: true,
        }}
        data={{
          dataSets: [
            {
              values: [{y: [4, 3, 2]}, {y: [1, 2, 1]}, {y: [3, 2, 5]}],
              label: '',
              config: {
                colors: [
                  processColor('#C0FF8C'),
                  processColor('#FFF78C'),
                  processColor('#FFD08C'),
                ],
                stackLabels: ['Educación', 'Trabajo', 'Pobreza'],
              },
            },
          ],
        }}
        highlights={[
          {x: 1, stackIndex: 2},
          {x: 2, stackIndex: 1},
        ]}
        xAxis={{
          valueFormatter: ['Morado', 'APP', 'Fuerza Popular'],
          granularityEnabled: true,
          granularity: 1,
        }}
        drawValueAboveBar={false}
        marker={{
          enabled: true,
          markerColor: processColor('#F0C0FF8C'),
          textColor: processColor('white'),
          markerFontSize: 14,
        }}
        //   onSelect={this.handleSelect.bind(this)}
        // onChange={(event) => console.log(event.nativeEvent)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flex: 1,
  },
  chart: {
    flex: 0.5,
    marginHorizontal: 30,
  },
  chartTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default AnalyticsChargesPie;
