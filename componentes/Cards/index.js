import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import iconConvidado from '../../assets/convidado.png';
import iconCarne from '../../assets/carne.png';
import iconRefrigerante from '../../assets/refrigerante.png';
import iconCerveja from '../../assets/cerveja.png';
export default function Cards() {
 return (
  <View style={styles.container}>

    <View style={styles.card}>
      <Image source={iconConvidado} style={styles.imgIcon}/>
      <Text style={styles.boxTexto}>Convidados</Text>
      <Text style={styles.boxValor}>1</Text>
    </View>

    <View style={styles.card}>
      <Image source={iconCarne} style={styles.imgIcon}/>
      <Text style={styles.boxTexto}>Carne</Text>
      <Text style={styles.boxValor}>400 GR</Text>
    </View>

    <View style={styles.card}>
      <Image source={iconRefrigerante} style={styles.imgIcon}/>
      <Text style={styles.boxTexto}>Refrigerante</Text>
      <Text style={styles.boxValor}>700 ML</Text>
    </View>

    <View style={styles.card}>
      <Image source={iconCerveja} style={styles.imgIcon}/>
      <Text style={styles.boxTexto}>Cerveja</Text>
      <Text style={styles.boxValor}>4 Latas</Text>
    </View>

  </View>
  );
}