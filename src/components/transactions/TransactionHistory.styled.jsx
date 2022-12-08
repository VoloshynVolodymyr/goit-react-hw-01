import styled from '@emotion/styled';

export const Table = styled.table`
  width: fit-content;
  margin: 0 auto;
  border-spacing: 1px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Head = styled.thead`
  background-color: ${props => props.theme.colors.tableBgColor};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: ${props => props.theme.spacing(4)};
`;

export const TableHeader = styled.th`
  width: 250px;
  padding: ${props => props.theme.spacing(4)};
  text-align: center;
`;

export const TrowHead = styled.tr`
  background-color: ${props => props.theme.colors.tableBgColor};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: ${props => props.theme.spacing(4)};
`;

export const TableBody = styled.tbody`
  color: ${props => props.theme.colors.tableRowMainColor};
  :nth-of-type(odd) {
    background-color: ${props => props.theme.colors.white};
  }
  :nth-of-type(even) {
    background-color: ${props => props.theme.colors.tableRowSecondaryColor};
  }
`;

export const TdataRow = styled.tr``;

export const Tdata = styled.td`
  width: 250px;
  padding: ${props => props.theme.spacing(4)};
  text-align: center;
`;
