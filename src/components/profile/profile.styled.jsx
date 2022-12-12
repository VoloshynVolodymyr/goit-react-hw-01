import styled from '@emotion/styled';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.profileBgColor};
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing(5)};
  img {
    background-color: steelblue;
    border-radius: 50%;
    margin-top: ${props => props.theme.spacing(5)};
  }
  background-color: ${props => props.theme.colors.cardBgColor};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.mainTextColor};
  font-weight: bold;
  font-size: ${props => props.theme.spacing(6)};
`;

export const Tag = styled.p`
  color: ${props => props.theme.colors.secondaryTextColor};
  font-weight: bold;
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.secondaryTextColor};
  font-weight: bold;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  padding-bottom: ${props => props.theme.spacing(2)};
  display: flex;
  flex-direction: row;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${props => props.theme.spacing(6)};
  padding-right: ${props => props.theme.spacing(6)};
  background-color: ${props => props.theme.colors.statsBgColor};
`;

export const Label = styled.span`
  color: steelblue;
  font-weight: bold;
  font-size: ${props => props.theme.spacing(6)};
`;

export const Quantity = styled.span`
  color: steelblue;
  font-weight: bold;
  font-size: ${props => props.theme.spacing(6)};
`;
