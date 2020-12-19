import React, {useState, useCallback} from 'react';
import {Text, StyleSheet, Dimensions, processColor} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';
import {useFocusEffect} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const AnalyticsChargesPie = ({candidates, parties}) => {
  const [charges, setCharges] = useState([]);
  const [colors, setColors] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (
        parties &&
        candidates &&
        parties.length > 0 &&
        candidates.length > 0
      ) {
        let totalCharges = calculateCharges(candidates);
        setCharges(totalCharges.chargesArray);
        setColors(totalCharges.colorsArray);
      }
    }, [candidates, parties]),
  );

  const calculateCharges = candidates => {
    let chargesArray = [];
    let colorsArray = [];
    for (party of parties) {
      chargesArray.push({label: party.name, value: 0});
      colorsArray.push(processColor(party.color));
    }
    for (candidate of candidates) {
      const element = chargesArray.find(c => c.label === candidate.party.name);
      chargesArray[chargesArray.indexOf(element)].value +=
        candidate.charges.length;
    }
    return {chargesArray, colorsArray};
  };

  return (
    <>
      <Text style={styles.chartTitle}>DENUNCIAS POR PARTIDO</Text>
      {charges ? (
        <PieChart
          style={styles.chart}
          legend={{
            enabled: true,
            textSize: 15,
            form: 'SQUARE',
            horizontalAlignment: 'CENTER',
            verticalAlignment: 'BOTTOM',
            orientation: 'HORIZONTAL',
            wordWrapEnabled: true,
          }}
          description={{
            text: 'This is Pie chart description',
            textSize: 15,
            textColor: processColor('darkgray'),
          }}
          data={{
            dataSets: [
              {
                values: charges,
                label: '',
                config: {
                  colors: colors,
                  valueTextSize: 20,
                  valueTextColor: processColor('white'),
                  sliceSpace: 1,
                  selectionShift: 5,
                  //xValuePosition: 'OUTSIDE_SLICE',
                  // yValuePosition: "OUTSIDE_SLICE",
                  valueFormatter: '#',
                  valueLineColor: processColor('green'),
                  valueLinePart1Length: 0.5,
                },
              },
            ],
          }}
          extraOffsets={{left: 5, top: 5, right: 5, bottom: 5}}
          entryLabelColor={processColor('white')}
          entryLabelTextSize={12}
          entryLabelFontFamily={'HelveticaNeue-Medium'}
          drawEntryLabels={false}
          rotationEnabled={false}
          rotationAngle={45}
          usePercentValues={false}
          // styledCenterText={{
          //   text: 'Pie center text!',
          //   color: processColor('pink'),
          //   fontFamily: 'HelveticaNeue-Medium',
          //   size: 20,
          // }}
          centerTextRadiusPercent={0}
          holeRadius={0}
          holeColor={processColor('#f0f0f0')}
          transparentCircleRadius={0}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={360}
          // onSelect={this.handleSelect.bind(this)}
          // onChange={event => console.log(event.nativeEvent)}
        />
      ) : null}
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
  },
  chartTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default AnalyticsChargesPie;
