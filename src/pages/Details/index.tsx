import React, {useState, useEffect} from 'react';
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
} from './styles';
import {destinations} from '../../mock/destinations';
import SvgStar from '../../assets/SvgStar';
import {View} from 'react-native';
import SvgArrowLeft from '../../assets/SvgArrowLeft';
import SvgFlight from '../../assets/SvgFlight';
import SvgArrowShortUp from '../../assets/SvgArrowShortUp';

export default function Details({route, navigation}) {
  interface Destiny {
    id: number;
    url: string;
    name: string;
    description: string;
    avaliation: number;
  }

  const {destination_id} = route.params;
  const [destination, setDestination] = useState<Destiny>({});

  useEffect(() => {
    setDestination(
      destinations.find((destination) => destination.id === destination_id),
    );
  }, []);

  return (
    <Container>
      <LinearGradient
        locations={[0.5, 0.7, 0.9]}
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
        source={{uri: destination.url}}
        style={{resizeMode: 'cover'}}
      />

      <ButtonBack onPress={() => navigation.goBack()}>
        <SvgArrowLeft />
      </ButtonBack>

      <Content style={{position: 'absolute', elevation: 11, minHeight: 150}}>
        <Header>
          <Title>{destination.name}</Title>
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
        <Description>{destination.description}</Description>
        <Button>
          <Label>Book a flight</Label>
          <SvgFlight />
        </Button>
        <ButtonDetails>
          <SvgArrowShortUp />
          <LabelDetails style={{textTransform: 'uppercase'}}>
            Swipe for details
          </LabelDetails>
        </ButtonDetails>
      </Content>
    </Container>
  );
}
