import React from 'react';
import { View, Text } from 'react-native';
import api from '../../services/Api';

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    const response = api.get('/cats');
  }

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <Text> Hello, world </Text>

      </SafeAreaView>
    )
  }


}


import { styles } from './CatsViewStyles';
import { SafeAreaView } from 'react-navigation';

export function CatsView() {
  return (
    <View style={styles.container}>

    </View>
  );
}