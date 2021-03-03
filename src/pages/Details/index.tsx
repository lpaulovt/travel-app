import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';

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
  ButtonFav,
} from './styles';

import {use_Context} from '../../hooks/index';
import SvgStar from '../../assets/SvgStar';
import {View, Linking, Alert} from 'react-native';
import SvgArrowLeft from '../../assets/SvgArrowLeft';
import SvgFlight from '../../assets/SvgFlight';
import SvgArrowShortUp from '../../assets/SvgArrowShortUp';
import SvgHeart from '../../assets/SvgHeart';

export default function Details({route, navigation}) {
  interface Destiny {
    id: number;
    url: string;
    name: string;
    description: string;
    avaliation: number;
    location: Array<number>;
    hotels: Hotel;
  }

  interface Hotel {
    id: number;
    name: string;
    stars: number;
    price: string;
    photo: string;
    coordinates: Array<number>;
  }

  const {selectedData} = use_Context();
  const destination: Destiny = selectedData;
  const supportedURL =
    'https://www.google.com/travel/explore?tfs=CBwQAxoZagsIAxIHL20vMG4yehIKMjAyMS0wMy0xNBoZEgoyMDIxLTAzLTE4cgsIAxIHL20vMG4yenACggELCP___________wFAAUgBmAEB&tfu=GioaKAoSCTIfcVECGUVAEbcZMC3DD0BAEhIJg3JMLc2iQUARbjNgWoZ6MEA&hl=pt-PT&gl=BR&tcfs=ChYKCS9tLzAxdDBuMhoJWmFxdWludG9zEjAKCS9tLzAxdDBuMhIJWmFxdWludG9zGhgKCjIwMjEtMDMtMTQSCjIwMjEtMDMtMThSAmAB';

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  }, [supportedURL]);

  return (
    <Container>
      <LinearGradient
        locations={[0.1, 0.6, 0.9]}
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}
        style={{
          elevation: 10,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Background
        source={{uri: destination.url[0].text}}
        style={{resizeMode: 'cover'}}
      />

      <ButtonBack onPress={() => navigation.goBack()}>
        <SvgArrowLeft />
      </ButtonBack>

      <ButtonFav>
        <SvgHeart />
      </ButtonFav>

      <Content style={{position: 'absolute', elevation: 11, minHeight: 150}}>
        <Header>
          <Title>{destination.name[0].text}</Title>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Avaliation>{destination.avaliation}</Avaliation>
            <SvgStar />
          </View>
        </Header>
        <Description>{destination.description[0].text}</Description>
        <Button onPress={() => handlePress()}>
          <Label>Book a flight</Label>
          <SvgFlight />
        </Button>
        <ButtonDetails
          onPress={() =>
            navigation.navigate('Map', {
              destination_name: destination.name[0].text,
            })
          }>
          <SvgArrowShortUp />
          <LabelDetails style={{textTransform: 'uppercase'}}>
            Swipe for details
          </LabelDetails>
        </ButtonDetails>
      </Content>
    </Container>
  );
}
