import React from 'react';
import {
  Container,
  Image,
  Content,
  Info,
  Title,
  Subtitle,
  Stars,
  Footer,
  Button,
  Label,
  Price,
} from './styles';
import SvgStar from '../../assets/SvgStar';

export default function MarkerInfo({name, data}) {
  let stars: Array<number> = [];

  for (let i: number = 0; i < data.stars; i++) {
    stars.push(i);
  }

  return (
    <>
      {Object.keys(data).length === 0 ? null : (
        <Container>
          <Content>
            <Title>Hotels in {name}</Title>
            <Image
              style={{
                resizeMode: 'cover',
              }}
              source={{
                uri: data.photo,
              }}
            />
            <Info>
              <Subtitle>{data.name}</Subtitle>
              <Stars>
                {stars.map((item) => (
                  <SvgStar key={item} />
                ))}
              </Stars>

              <Footer>
                <Button>
                  <Label>Details</Label>
                </Button>
                <Price>{data.price}</Price>
              </Footer>
            </Info>
          </Content>
        </Container>
      )}
    </>
  );
}
