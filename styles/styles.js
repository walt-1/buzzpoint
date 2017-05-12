'use strict';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#3d8af7',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: "Verdana",
    letterSpacing: -6,
  },
  small: {
    margin: 10,
    fontWeight: 'normal',
    fontSize:20,
    color: '#3d8af7',
  }
});

export default styles;
