import React from 'react';
import {Container, Title, Button, Label} from './styles';

export default function BookMark({navigation}) {
  return (
    <Container>
      <Title>Under construction...</Title>
      <Button
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Label>Go to home</Label>
      </Button>
    </Container>
  );
}
