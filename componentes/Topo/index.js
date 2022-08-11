import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import imgChurrasco from '../../assets/churrasco.png';

export default function Topo() {
 return (
  <View>
    <Image source={imgChurrasco}/>

    <View>
      <Text>Churrasco em casa</Text>
      <Text>Calculando a comida e a bebida</Text>
    </View>

  </View>
  );
}