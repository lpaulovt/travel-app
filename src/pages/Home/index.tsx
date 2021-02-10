import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions, Platform} from 'react-native';
import {destinations} from '../../mock/destinations';

import {Container, Header, Image, Title} from './styles';
import CarouselItem from '../../components/CarouselItem';
import Country from '../../components/Country/index';

import SvgGreece from '../../assets/SvgGreece';
import SvgMenu from '../../assets/SvgMenu';
import SvgPoland from '../../assets/SvgPoland';
import SvgFrance from '../../assets/SvgFrance';

export default function Home({navigation}) {
  const {width, height} = Dimensions.get('window');
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.74 : width * 0.76;

  const data = [
    {id: 1, name: 'France', icon: <SvgFrance />},
    {id: 2, name: 'Greece', icon: <SvgGreece />},
    {id: 3, name: 'Poland', icon: <SvgPoland />},
  ];
  return (
    <Container>
      <Header>
        <SvgMenu />
        <Title>Europe</Title>
        <Image
          source={{
            uri:
              'https://avatars.githubusercontent.com/u/62833767?s=460&u=96ec116ca4025205378fe85e2a234998c6b797bd&v=4',
          }}
        />
      </Header>
      <Carousel
        firstItem={1}
        callbackOffsetMargin={0}
        data={data}
        inactiveSlideScale={0.6}
        inactiveSlideOpacity={0.5}
        sliderWidth={width}
        sliderHeight={30}
        itemWidth={120}
        renderItem={({item}) => <Country item={item} />}
      />
      <Carousel
        firstItem={1}
        callbackOffsetMargin={0}
        data={destinations}
        sliderWidth={width}
        sliderHeight={height * 0.5}
        itemWidth={ITEM_SIZE}
        renderItem={({item}) => (
          <CarouselItem item={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}
