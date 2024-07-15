import IconButton from "components/ui/IconButton";

import { Logo, Search } from "components/ui/Icons/index.js";
import { SectionSubTitle } from "components/ui/Typography";
import { LogoWrapper, Wrapper } from "./styled";
import { ContentWrapper } from "components/layout";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <Link to="/">
          <LogoWrapper>
            <Logo />
            <SectionSubTitle>ZaMusic</SectionSubTitle>
          </LogoWrapper>
        </Link>
        <Link to="/search">
          <IconButton withBackground height={59} width={59}>
            <Search />
          </IconButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
