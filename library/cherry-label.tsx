import React, { Component } from 'react';
import { Text } from 'react-native';
import labelStyle from './labelStyle';

export interface CherryLabelProps {
  text: string;
}

export default class CherryLabel extends Component<CherryLabelProps> {
  render () {
    return (
      <Text style={[ labelStyle, { color: 'pink' } ]}>
        { this.props.text }
      </Text>
    );
  }
}
