"use client";

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SECONDARY_LIGHT_COLOR,
} from "@/app/styles/colors";
import styled from "styled-components";

export const MainContainer = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 4rem;
`;

export const TipBlock = styled("div")`
  height: 28px;
  width: 82px;
  border-radius: 16px;
  padding: 4px 12px;
  background-color: ${SECONDARY_LIGHT_COLOR};
  color: ${SECONDARY_COLOR};
  font-size: 14px;
  font-weight: 500;
`;

export const HeadText = styled("h2")`
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  color: ${PRIMARY_COLOR};
`;

export const SubHeadText = styled("h3")`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: ${SECONDARY_COLOR};
`;
