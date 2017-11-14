import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Provider from 'serviceprovider';

import 'rxjs/add/operator/takeWhile';

// Components
import HelloComponent from './components/hello/hello.component';
import NameAlternator from './classes/name.alternator';

// Services
import GreetService from './services/greet.service';

export default class HelloWorldApp extends Component {
  // The list of the service
  providers = [
    GreetService
  ];

  // Initialize the Provider in top module class
  constructor(props) {
    super(props);
    Provider.init(this.providers);
    new NameAlternator();
  }

  // UI Render
  render() {
    return (
      <View>
        <Text /><Text /><Text /><Text />
        <HelloComponent />
      </View>
    );
  }
}
