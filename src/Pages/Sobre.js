// src/Page2.js

import React from 'react';
import { View, Button, Text } from 'react-native';

const Sobre = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

Sobre.navigationOptions = {
  title: 'Sobre',
  header:null
}


export default Sobre;