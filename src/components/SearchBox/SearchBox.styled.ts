import styled from "styled-components";
import { GRAY_COLOR, LIGHT_BORDER_COLOR } from "@/app/styles/colors";

export const MainContainer = styled("div")`
  height: 48px;
  width: 80%;
  max-width: 320px;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid ${LIGHT_BORDER_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const SearchInput = styled("input")`
  height: 100%;
  width: 100%;
  border-radius: 0 8px 8px 0;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${GRAY_COLOR};
`;
