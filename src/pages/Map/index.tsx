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
  const {destination_id} = route.params;
  const {data} = use_Context();

  //const [destination, setDestination] = useState<Destiny>([] as Destiny);
  const [isLoading, setIsLoading] = useState(true);
  const [getHotelInfo, setGetHotelInfo] = useState({});
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  useEffect(() => {
    setDestination(
      destinations.find((destination) => destination.id === destination_id),
    );
    setIsLoading(false);
  }, []);
  const style = JSON.stringify(require('../../assets/style.json'));
  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <SvgArrowLeft />
      </ButtonBack>
      {isLoading ? null : (
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
            onDidFinishLoadingMap={() =>
              setTimeout(() => {
                setIsLoadingMap(false);
              }, 500)
            }>
            <MapboxGL.Camera
              centerCoordinate={
                destination.location !== undefined
                  ? [destination.location[1], destination.location[0]]
                  : [0, 0]
              }
              zoomLevel={12}
              pitch={90}
            />
            {destination.hotels !== undefined && isLoadingMap === false
              ? destination.hotels.map((hotel) => (
                  <TouchableOpacity
                    onPress={() => {
                      setGetHotelInfo(
                        destination.hotels.find((item) => item.id === hotel.id),
                      );
                    }}
                    key={hotel.id}>
                    <MapboxGL.MarkerView
                      id="rocketseat"
                      coordinate={[hotel.coordinates[1], hotel.coordinates[0]]}>
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
      )}
    </Container>
  );
}
