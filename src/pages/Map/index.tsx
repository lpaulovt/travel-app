import React, {useState, useEffect} from 'react';

import {
  Container,
  Background,
  Content,
  Title,
  Description,
  Header,
  Avaliation,
  ButtonBack,
  Button,
  Label,
  ButtonDetails,
  LabelDetails,
} from './styles';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {Text, View} from 'react-native';
import SvgLocation from '../../assets/SvgLocation';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibHBhdWxvdnQiLCJhIjoiY2tsMDFhN2FqMGFxYjJ2cGpodzRvbm1wMCJ9.WlJD_2v46xXb8Ws_wujXRw',
);

export default function Map({route, navigation}) {
  interface Destiny {
    id: number;
    url: string;
    name: string;
    description: string;
    avaliation: number;
  }

  return (
    <Container>
      <MapboxGL.MapView style={{flex: 1}} styleURL={MapboxGL.StyleURL.Dark}>
        <MapboxGL.MarkerView
          id="rocketseat"
          coordinate={[-49.6446024, -27.2108001]}>
          <SvgLocation fill={'#4096fe'} width={30} height={30} />
        </MapboxGL.MarkerView>
      </MapboxGL.MapView>
    </Container>
  );
}
