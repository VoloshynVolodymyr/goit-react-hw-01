import styled from '@emotion/styled';

export const FriendBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  background-color: ${props => props.theme.colors.profileBgColor};
  p {
    margin: 0;
  }
  margin: ${props => props.theme.spacing(5)} ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(5)} ${props => props.theme.spacing(5)};
  list-style: none;
`;

export const Item = styled.li`
width: ${props => props.theme.spacing(100)};
height: ${props => props.theme.spacing(25)};
padding: ${props => props.theme.spacing(1)};
border: ${props => `${props.theme.spacing(1)} solid ${props.theme.colors.secondaryTextColor}`};
display: flex;
flex-direction: column;
align-items: center;
    justify-content: center;
  background-color: ${({ isOnline, theme }) => {
    if (isOnline) {
      return theme.colors.isOnline;
    }
    if (!isOnline) {
      return theme.colors.isOffline;
    }
  }}
  `

  export const Check = styled.p`
   color:${({ isOnline, theme }) => {
    if (isOnline) {
      return theme.colors.isOnlineText;
    }
    if (!isOnline) {
      return theme.colors.isOfflineText;
    }
  }}
  `

  export const Status = styled.span`
  color: ${props => props.theme.colors.mainTextColor};
  font-weight: bold;
  font-size: ${props => props.theme.spacing(3)};`

  export const Name = styled.span`
  color: ${props => props.theme.colors.mainTextColor};
  font-weight: bold;
  font-size: ${props => props.theme.spacing(3)};`
