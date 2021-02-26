import styled from 'styled-components/native';
import {
  Button as button,
  Label as label,
  Title as title,
} from '../CarouselItem/styles';

export const Container = styled.SafeAreaView`
  width: 90%;
  height: 20%;
  border-radius: 15px;
  background: rgba(65, 65, 65, 0.85);

  position: absolute;
  bottom: 5%;
  left: 5%;
  right: 5%;

  padding: 3%;
`;

export const Image = styled.Image`
  border-radius: 15px;
  height: 100%;
  width: 30%;
  margin-right: 5%;
`;

export const Content = styled.View`
  height: 100%;

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Info = styled.View``;

export const Title = styled(title)`
  position: absolute;

  top: -40%;
  left: -5%;
`;

export const Subtitle = styled(Title)`
  font-size: 16px;
  padding-bottom: 10px;

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
`;

export const Stars = styled.View`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 73%;
`;

export const Button = styled(button)`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;

  width: 40%;
`;

export const Label = styled(label)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.background};
`;

export const Price = styled(Label)`
  font-size: 12px;
  color: #959595;
`;
