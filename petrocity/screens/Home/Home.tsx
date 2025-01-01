import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../Home/HomeStyles';

export function Home() {
  return (
    <View style={styles.container}>
        <Text> Hello, world</Text>
    </View>
  );
}