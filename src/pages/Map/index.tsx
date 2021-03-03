import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, ButtonBack} from './styles';
import {destinations} from '../../mock/destinations';
import {use_Context} from '../../hooks/index';

import MapboxGL from '@react-native-mapbox-gl/maps';
import MarkerInfo from '../../components/MarkerInfo/index';
import SvgLocationHotel from '../../assets/SvgLocationHotel';
import SvgArrowLeft from '../../assets/SvgArrowLeft';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibHBhdWxvdnQiLCJhIjoiY2tsMDFhN2FqMGFxYjJ2cGpodzRvbm1wMCJ9.WlJD_2v46xXb8Ws_wujXRw',
);

export default function Map({route, navigation}) {
  interface Hotel {
    id: number;
    name: string;
    stars: number;
    price: string;
    photo: string;
    coordinates: Array<number>;
  }
  interface Destiny {
    id: number;
    url: string;
    name: string;
    description: string;
    avaliation: number;
    location: Array<number>;
    hotels: Array<[Hotel]>;
  }

  const {selectedData} = use_Context();
  const destination: Destiny = selectedData;
  const [getHotelInfo, setGetHotelInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <SvgArrowLeft />
      </ButtonBack>

      <>
        <MapboxGL.MapView
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -25,
            top: 0,
          }}
          preferredFramesPerSecond={900000}
          accessToken="pk.eyJ1IjoibHBhdWxvdnQiLCJhIjoiY2tnNnF0YjB2MDAwaTJ5cW1oZ3p4bHJmcCJ9.yABBQvCgMruQef1-IRMedA"
          styleURL={'mapbox://styles/lpaulovt/cklkz2cno2d9y17qm7oa2vw62'}
          zoomEnabled={true}
          rotateEnabled={true}
          surfaceView={true}
          scrollEnabled={true}
          localizeLabels={false}
          onDidFinishLoadingMap={() => setIsLoading(false)}>
          <MapboxGL.Camera
            centerCoordinate={
              destination.location !== undefined
                ? [
                    destination.location.longitude,
                    destination.location.latitude,
                  ]
                : [0, 0]
            }
            zoomLevel={10}
            pitch={90}
          />
          {destination.hotels !== undefined && isLoading === false
            ? destination.hotels.map((hotel) => (
                <TouchableOpacity
                  key={hotel.name1[0].text}
                  onPress={() => {
                    setGetHotelInfo(hotel);
                  }}>
                  <MapboxGL.MarkerView
                    id="rocketseat"
                    coordinate={[
                      hotel.coordinates.longitude,
                      hotel.coordinates.latitude,
                    ]}>
                    <SvgLocationHotel
                      fill={
                        getHotelInfo.id === hotel.id ? '#4096fe' : '#818181'
                      }
                      width={35}
                      height={35}
                    />
                  </MapboxGL.MarkerView>
                </TouchableOpacity>
              ))
            : null}
        </MapboxGL.MapView>
        <MarkerInfo name={destination.name} data={getHotelInfo} />
      </>
    </Container>
  );
}
