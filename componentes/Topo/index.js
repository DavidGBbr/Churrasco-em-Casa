import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import imgChurrasco from '../../assets/churrasco.png';

export default function Topo() {
 return (
  <View style={styles.box}>
    <Image source={imgChurrasco} style={styles.imgIcon}/>

    <View>
      <Text style={styles.title}>
        Churrasco em casa
      </Text>

      <Text style={styles.description}>
        Calculando a comida e a bebida
      </Text>
    </View>

  </View>
  );
}