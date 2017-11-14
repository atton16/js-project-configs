import { Component } from 'react';
import { StyleSheet } from 'react-native';

// Internal
import styles from './hello.component.styles';
import ui from './hello.component.ui';

// Services
import Provider from 'serviceprovider';
import GreetService from '../../services/greet.service';

export default class HelloComponent extends Component {
  _unSubAll = false;
  greetService: GreetService;

  constructor(props) {
    super(props);
    this.styles = StyleSheet.create(styles);
    this.greetService = Provider.resolve(GreetService);
    this.state = {};
  }

  componentDidMount() {
    this.greetService.stateEvent
      .takeWhile(() => !this._unSubAll)
      .subscribe(name => this.setState({name: name}));
  }

  componentWillUnmount() {
    this._unSubAll = true;
  }

  render() {
    return ui.apply(this);
  }
}
