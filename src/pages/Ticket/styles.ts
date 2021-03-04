import styled from 'styled-components/native';
import {
  Button as button,
  Label as label,
} from '../../components/CarouselItem/styles';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.blue};
`;

export const Button = styled(button)`
  width: 40%;
  margin-top: 15px;
  position: relative;
  bottom: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blue};
`;

export const Label = styled(label)`
  color: ${({theme}) => theme.colors.background};
`;
