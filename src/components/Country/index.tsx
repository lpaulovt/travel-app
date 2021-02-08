import React from 'react';
import {Container, Label} from './styles';

export default function Country(props) {
  return (
    <Container>
      {props.item.icon}
      <Label>{props.item.name}</Label>
    </Container>
  );
}
