import { styled } from "styled-components";

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryGrey};
  text-align: left;
`;

export const TableHeading = styled.th`
  padding: 30px 20px 30px ${(props) => (props.first ? "20px" : "0")};
`;

export const TableHeadingTime = styled(TableHeading)`
  min-width: 140px;
`;
export const Line = styled.td`
  width: 100%;
  height: 1px;
`;
