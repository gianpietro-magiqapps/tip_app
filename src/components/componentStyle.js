import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  componentView: {
    padding: 10,
    width: 0.9 * SCREEN_WIDTH,
    height: 0.9 * SCREEN_WIDTH,
  },
  componentTitleView: {
    backgroundColor: 'black',
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  componentTitle: {
    fontSize: 0.022 * SCREEN_HEIGHT,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  componentSubtitle: {
    fontSize: 0.021 * SCREEN_HEIGHT,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  componentText: {
    fontSize: 0.02 * SCREEN_HEIGHT,
    textAlign: 'center',
  },
  tipbox: {
    backgroundColor: 'green',
    padding: 3,
  },
  tipboxText: {
    fontSize: 12,
    color: 'white',
  },
});
