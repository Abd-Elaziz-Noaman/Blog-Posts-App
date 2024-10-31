"use client";

import {
  DARK_TEXT_COLOR,
  GRAY_COLOR,
  SECONDARY_COLOR,
} from "@/app/styles/colors";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const MainContainer = styled(Link)`
  position: relative;
  height: 580px;
  width: 100%;
  padding: 24px;
  padding-bottom: 32px;
  background-color: white;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const HeadText = styled("h3")`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${DARK_TEXT_COLOR};
`;

export const SubHeadText = styled("h4")`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${SECONDARY_COLOR};
`;

export const DescriptionText = styled("p")`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${GRAY_COLOR};
`;

export const RowStack = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

export const AvatarWrapper = styled(RowStack)`
  position: absolute;
  bottom: 32px;
  left: 24px;
`;

export const AvatarTitle = styled("p")`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${DARK_TEXT_COLOR};
`;

export const DateText = styled("p")`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${GRAY_COLOR};
`;

export const PostImage = styled(Image)`
  height: 30%;
  width: 100%;
  object-fit: cover;
`;

export const AvatarImage = styled(Image)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
