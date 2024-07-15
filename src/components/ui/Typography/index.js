import { styled, ThemeProvider } from "styled-components";
import { device } from "styles/BreakPoints";
export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 60px;
  line-height: 90px;
  ${device.md} {
    font-size: 30px;
    line-height: 45px;
  }
`;
export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 45px;
  line-height: 60px;
  ${device.md} {
    font-size: 22px;
    line-height: 33px;
  }
`;
export const SectionSubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 25px;
  line-height: 38px;

  ${device.md} {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const Text = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 22px;
  line-height: 27px;
  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const SmallText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 18px;
  line-height: 22px;
`;
export const SubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 20px;
  line-height: 24px;
`;
export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 23px;
  line-height: 28px;
`;
