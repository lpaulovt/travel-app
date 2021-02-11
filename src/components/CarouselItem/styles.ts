import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Item = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const ContainerDescription = styled.View`
  position: absolute;
  bottom: 50px;
  z-index: 20;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 5px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
`;

export const Description = styled.Text`
  opacity: 0.7;
  letter-spacing: 0.1px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
`;

export const Button = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.white};

  height: 50px;
  width: 45%;
  border-radius: 15px;
  position: absolute;
  bottom: -25px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.black};
  color: ${({theme}) => theme.colors.background};
`;
