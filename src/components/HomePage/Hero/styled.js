import styled from "styled-components";
import { MainTitle, Text } from "components/ui/Typography";
import Button from "components/ui/Button";
import { device } from "styles/BreakPoints";

const HERO_IMAGE_HIDDEN_BREAKPOINT = 1050;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 35px;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    align-items: center;
    height: 305px;
    text-align: center;
    padding: 41px 32px;
    margin: 30px 0 35px;
  }
`;

export const TextWrapper = styled.div`
  padding-left: 123px;

  ${device.xl} {
    padding-left: 70px;
  }

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    width: 100%;
    padding: 0;
  }
`;

export const HeroImage = styled.img`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    display: none;
  }
`;

export const HeroTitleText = styled(MainTitle)`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    font-size: 45px;
    line-height: 68px;
  }
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;

export const PlayButton = styled.button`
  background-color: none;
  cursor: pointer;
  border: none;
  padding: 18px 35px;
  margin-top: 52px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow:
    7px 23px 9px rgba(7, 21, 44, 0.02),
    4px 13px 8px rgba(7, 21, 44, 0.05) 2px 6px 6px rgba(7, 21, 44, 0.09),
    0px 1px 3px rgba(7, 21, 44, 0.11),
    0px 0px 0px rgba(7, 21, 44, 0.11);
  border-radius: 20px;
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    margin: 30px auto;
    width: 100%;
    justify-content: center;
  }
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
