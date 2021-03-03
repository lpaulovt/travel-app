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
            <Title>Hotels in {name[0].text}</Title>
            <Image
              style={{
                resizeMode: 'cover',
              }}
              source={{
                uri: data.photo[0].text,
              }}
            />
            <Info>
              <Subtitle>{data.name1[0].text}</Subtitle>
              <Stars>
                {stars.map((item) => (
                  <SvgStar key={item} />
                ))}
              </Stars>

              <Footer>
                <Button>
                  <Label>Details</Label>
                </Button>
                <Price>{data.price[0].text}</Price>
              </Footer>
            </Info>
          </Content>
        </Container>
      )}
    </>
  );
}
