import styled from "styled-components";
import { SectionSubTitle } from "components/ui/Typography";
import { PLAYER_HEIGHT } from "common/constants";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);
  ${device.md} {
    padding-top: 28px;
    gap: 25px;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  ${device.lg} {
    width: 100%;
  }
`;

export const TableTitle = styled(SectionSubTitle)`
  margin-bottom: 30px;
  ${device.md} {
    margin-bottom: 15px;
  }
`;

export const NotFoundText = styled(SectionSubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
export const SearchIcon = styled(SectionSubTitle)``;
