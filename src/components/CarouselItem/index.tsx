import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, Platform} from 'react-native';
import {use_Context} from '../../hooks/index';

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

export default function CarouselItem({item, id, navigation}) {
  const {width, height} = Dimensions.get('window');
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
  const {setSelectedData} = use_Context();

  return (
    <Item>
      <Container
        style={{
          height: height * 0.55,
          width: ITEM_SIZE,
        }}>
        <LinearGradient
          locations={[0.3, 0.7, 0.9]}
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
            uri: item.url[0].text,
          }}
        />
      </Container>
      <ContainerDescription>
        <Title>{item.name[0].text}</Title>
        <Description>{item.description[0].text}</Description>
      </ContainerDescription>
      <Button
        onPress={() => {
          setSelectedData(item);
          navigation.navigate('Details', {destination_id: id});
        }}>
        <Label>Explore</Label>
      </Button>
    </Item>
  );
}
