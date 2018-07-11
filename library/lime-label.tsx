import React, { Component } from 'react';
import { Text } from 'react-native';
import labelStyle from './labelStyle';

export interface LimeLabelProps {
  text: string;
}

export default class LimeLabel extends Component<LimeLabelProps> {
  render() {
    return (
      <Text style={[ labelStyle, { color: 'lime' } ]}>
        { this.props.text }
      </Text>
    );
  }
}
