import styled from 'styled-components';

export const TransacticsWrapper = styled.table`
  table-layout: fixed;
  min-width: 500px;
  margin: 0 auto;
  border-collapse: collapse;
`;

export const ThElement = styled.th`
  padding: 10px;
  border: 2px solid rgb(202, 200, 200);
  background-color: rgb(95, 167, 230);
`;
export const TdElement = styled.td`
  padding: 10px;
  border: 2px solid rgb(202, 200, 200);
`;
export const TrElement = styled.tr`
  &:nth-child(even) {
    background-color: rgb(95, 167, 230);
  }
`;
