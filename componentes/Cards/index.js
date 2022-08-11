import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import iconConvidado from '../../assets/convidado.png';
import iconCarne from '../../assets/carne.png';
import iconRefrigerante from '../../assets/refrigerante.png';
import iconCerveja from '../../assets/cerveja.png';
export default function Cards() {
 return (
  <View>

    <View>
      <Image source={iconConvidado}/>
      <Text>Convidados</Text>
      <Text>1</Text>
    </View>

    <View>
      <Image source={iconCarne}/>
      <Text>Carne</Text>
      <Text>400 GR</Text>
    </View>

    <View>
      <Image source={iconRefrigerante}/>
      <Text>Refrigerante</Text>
      <Text>700 ML</Text>
    </View>

    <View>
      <Image source={iconCerveja}/>
      <Text>Cerveja</Text>
      <Text>4 Latas</Text>
    </View>

  </View>
  );
}