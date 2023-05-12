import styled from "styled-components";

import { theme } from "../../../utils/theme.jsx";

export const SectionStyled = styled.section`
  padding-top: 40px;
  padding-bottom: 75px;
  @media ${theme.breakpoints.desktop.media} {
    padding-top: 60px;
  }
`;