import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, Platform} from 'react-native';

import {
  Item,
  Button,
  Container,
  Image,
  Label,
  ContainerDescription,
  Title,
  Description,
} from './styles';

export default function CarouselItem(props) {
  const {width, height} = Dimensions.get('window');
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

  return (
    <Item>
      <Container
        style={{
          height: height * 0.55,
          width: ITEM_SIZE,
        }}>
        <LinearGradient
          locations={[0.5, 0.7, 0.9]}
          colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)']}
          style={{
            elevation: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Image
          style={{
            resizeMode: 'cover',
          }}
          source={{
            uri: props.item.url,
          }}
        />
      </Container>
      <ContainerDescription>
        <Title>{props.item.name}</Title>
        <Description>{props.item.description}</Description>
      </ContainerDescription>
      <Button>
        <Label>Explore</Label>
      </Button>
    </Item>
  );
}
