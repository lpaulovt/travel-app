import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {
  Title as title,
  Description as description,
  Button as button,
  Label as label,
} from '../../components/CarouselItem/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  position: relative;
`;

export const Content = styled.View`
  position: absolute;
  z-index: 100;
  bottom: 0px;

  width: 90%;
  margin: 0 5%;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Avaliation = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
  margin-right: 5px;
`;

export const Title = styled(title)`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 28px;
  margin-bottom: 15px;
`;

export const Description = styled(description)`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  margin-bottom: 10px;
`;

export const ButtonBack = styled(RectButton)`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  justify-content: center;
  align-items: center;
  background-color: #41414115;
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const ButtonFav = styled(RectButton)`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  justify-content: center;
  align-items: center;
  background-color: #41414115;
  position: absolute;
  top: 5%;
  right: 5%;
`;

export const Button = styled(button)`
  width: 100%;
  margin: 15px 0;
  position: relative;
  bottom: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(label)`
  margin-right: 10px;
`;

export const ButtonDetails = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px;
  opacity: 0.5;
`;
export const LabelDetails = styled(label)`
  font-size: 10px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.medium};
  letter-spacing: 1px;
  margin-top: 2px;
`;
