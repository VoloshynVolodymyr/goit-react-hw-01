import styled from '@emotion/styled';

export const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.spacing(5)} ${props => props.theme.spacing(6)};
`;

export const StatisticLabel = styled.span`
  margin: 10px 0px;
  color: ${props => props.theme.colors.mainTextColor};
  font-weight: bold;
  font-size: ${props => props.theme.spacing(6)};
`;

export const StatisticWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondBgColor};
  margin: 20px 0;
`;
