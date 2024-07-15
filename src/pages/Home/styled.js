import { styled } from "styled-components";
import { SectionSubTitle } from "components/ui/Typography";
import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { device } from "styles/BreakPoints";
export const TrendsAndArtistSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);
  overflow: hidden;
  ${device.xl} {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }
`;
export const GreyTitle = styled(SectionSubTitle)`
  color: ${({ theme }) => theme.colors.SecondaryGrey};
`;
export const StyledAside = styled.aside`
  margin-left: 90px;
  ${device.xl} {
    margin-left: 0;
  }
`;
