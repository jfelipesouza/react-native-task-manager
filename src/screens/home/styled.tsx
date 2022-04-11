import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const ListContainer = styled.View`
  min-height: ${({ theme }) => theme.screenDimensions.height * 0.2}px;
  align-self: flex-start;
  width: 100%;
  align-items: center;
`;

export const CardContent = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: ${({ theme }) => theme.border.md};
  margin: ${({ theme }) => theme.space.md} 0;
  elevation: 2;
`;
export const CardLists = styled.FlatList`
  margin: ${({ theme }) => theme.border.md} 0;
`;
