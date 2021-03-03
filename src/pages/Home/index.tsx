import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions, Platform} from 'react-native';
import Prismic from 'prismic-javascript';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const client = Prismic.client('https://travlr.cdn.prismic.io/api/v2');

import {
  Container,
  Header,
  Image,
  Title,
  ContainerCountry,
  ContainerItem,
} from './styles';
import CarouselItem from '../../components/CarouselItem';
import Country from '../../components/Country/index';

import SvgGreece from '../../assets/SvgGreece';
import SvgMenu from '../../assets/SvgMenu';
import SvgPoland from '../../assets/SvgPoland';
import SvgFrance from '../../assets/SvgFrance';

import {use_Context} from '../../hooks/index';

export default function Home({navigation}) {
  const {setData} = use_Context();
  const {width, height} = Dimensions.get('window');
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.74 : width * 0.76;
  const data = [
    {id: 1, name: 'France', icon: <SvgFrance />},
    {id: 2, name: 'Greece', icon: <SvgGreece />},
    {id: 3, name: 'Poland', icon: <SvgPoland />},
  ];
  const [destinations, setDestinations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function getData() {
    try {
      const countrys = await client.query(
        Prismic.Predicates.at('document.type', 'country'),
      );

      setDestinations(countrys.results);
      setData(countrys.results);
      setIsLoading(false);
    } catch (error) {
      console.warn(error.response.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      {!isLoading === false ? (
        <>
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
          {destinations === null ? null : (
            <Carousel
              firstItem={1}
              callbackOffsetMargin={0}
              data={destinations}
              sliderWidth={width}
              sliderHeight={height * 0.5}
              itemWidth={ITEM_SIZE}
              renderItem={({item}) => (
                <CarouselItem
                  item={item.data}
                  id={item.id}
                  navigation={navigation}
                />
              )}
            />
          )}
        </>
      ) : (
        <>
          <Header>
            <ShimmerPlaceHolder
              style={{height: 17, width: 20}}
              LinearGradient={LinearGradient}
              duration={1000}
              shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
            />
            <ShimmerPlaceHolder
              style={{height: 17, width: 70}}
              LinearGradient={LinearGradient}
              duration={1000}
              shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
            />
            <ShimmerPlaceHolder
              style={{height: 25, width: 25, borderRadius: 17.5}}
              LinearGradient={LinearGradient}
              duration={1000}
              shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
            />
          </Header>
          <ContainerCountry>
            <ContainerItem>
              <ShimmerPlaceHolder
                style={{height: 60, width: 60, borderRadius: 30, opacity: 0.7}}
                width={300}
                LinearGradient={LinearGradient}
                duration={1000}
                shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
              />
              <ShimmerPlaceHolder
                style={{height: 17, width: 70, marginTop: 10}}
                LinearGradient={LinearGradient}
                duration={1000}
                shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
              />
            </ContainerItem>
            <ContainerItem>
              <ShimmerPlaceHolder
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  marginBottom: 20,
                  marginHorizontal: 30,
                }}
                width={300}
                LinearGradient={LinearGradient}
                duration={1000}
                shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
              />
              <ShimmerPlaceHolder
                style={{height: 17, width: 70}}
                LinearGradient={LinearGradient}
                duration={1000}
                shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
              />
            </ContainerItem>
            <ContainerItem>
              <ShimmerPlaceHolder
                style={{height: 60, width: 60, borderRadius: 30, opacity: 0.7}}
                width={300}
                LinearGradient={LinearGradient}
                duration={1000}
                shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
              />
              <ShimmerPlaceHolder
                style={{height: 17, width: 70, marginTop: 10}}
                LinearGradient={LinearGradient}
                duration={1000}
                shimmerColors={['#3E3E3E', '#5D5C5C', '#4E4E4E']}
              />
            </ContainerItem>
          </ContainerCountry>
          <ContainerCountry>
            <ShimmerPlaceHolder
              style={{
                height: height * 0.55,
                width: ITEM_SIZE,
                borderRadius: 35,
                marginHorizontal: 10,
                opacity: 0.7,
              }}
              LinearGradient={LinearGradient}
              duration={1000}
              width={350}
              location={[0.35, 0.5, 0.7]}
              shimmerColors={['#1f1f1f', '#414141', '#2a2a2a']}
            />

            <ShimmerPlaceHolder
              style={{
                height: height * 0.55,
                width: ITEM_SIZE,
                borderRadius: 35,
                marginBottom: 50,
                marginHorizontal: 10,
              }}
              LinearGradient={LinearGradient}
              duration={1000}
              width={350}
              location={[0.35, 0.5, 0.7]}
              shimmerColors={['#1f1f1f', '#414141', '#2a2a2a']}
            />

            <ShimmerPlaceHolder
              style={{
                height: height * 0.55,
                width: ITEM_SIZE,
                borderRadius: 35,
                marginHorizontal: 10,
                opacity: 0.7,
              }}
              LinearGradient={LinearGradient}
              duration={1000}
              width={350}
              location={[0.35, 0.5, 0.7]}
              shimmerColors={['#1f1f1f', '#414141', '#2a2a2a']}
            />
          </ContainerCountry>
        </>
      )}
    </Container>
  );
}
