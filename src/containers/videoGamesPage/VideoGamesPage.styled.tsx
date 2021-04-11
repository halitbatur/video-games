import styled from "@emotion/styled";
import { BreakPoints } from "../../components/style";

export const PageContainer = styled.div`
  padding: 50px 50px 0;
  font-family: Mulish;

  @media (max-width: ${BreakPoints.md}) {
    padding: 30px 30px 0;
  }
  @media (max-width: ${BreakPoints.sm}) {
    padding: 10px 10px 0;
  }
`;

export const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
