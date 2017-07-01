import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import Chapter from './src/components/chapter';

export default class inkittTest extends Component {
  render() {
    return (
      <Chapter />
    );
  }
}

AppRegistry.registerComponent('inkittTest', () => inkittTest);
