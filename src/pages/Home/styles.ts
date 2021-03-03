import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 17.5px;
`;

export const Title = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.gray};
`;

export const CarouselItem = styled.View`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`;

export const ContainerCountry = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  margin-bottom: 70px;
`;

export const ContainerItem = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
