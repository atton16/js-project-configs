import React from 'react';
import { View, Text } from 'react-native';

module.exports = function () {
  return (
    <View style={this.styles.container}>
      <Text>Hello {this.state.name}</Text>
    </View>
  );
};
