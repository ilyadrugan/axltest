import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface Props {
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  aic?: string;
  justify?: string;
  row?: boolean;
  width?: number | string;
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
  wrap?: boolean;
  bg?: string;
  br?: number;
}

export const Stack = styled.View<Props>`
  width: ${(p) =>
    typeof p.width === "string" ? p.width : perfectSize(p.width) || "auto"};
  align-items: ${(p) => (p.aic ? p.aic : "flex-start")};
  flex-direction: ${(p) => (p.row ? "row" : "column")};
  justify-content: ${(p) => p.justify || "flex-start"};
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
  margin-left: ${(p) => perfectSize(p.ml) || 0}px;
  padding-top: ${(p) => perfectSize(p.pt) || 0}px;
  padding-bottom: ${(p) => perfectSize(p.pb) || 0}px;
  padding-left: ${(p) => perfectSize(p.pl) || 0}px;
  padding-right: ${(p) => perfectSize(p.pr) || 0}px;
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "nowrap")};
  background-color: ${(p) => p.bg || "none"};
  border-radius: ${({ br }) => perfectSize(br) || 0}px;
`;

export const TouchableStack = styled.TouchableOpacity<Props>`
  width: ${(p) =>
    typeof p.width === "string" ? p.width : perfectSize(p.width) || "auto"};
  align-items: ${(p) => (p.aic ? p.aic : "flex-start")};
  flex-direction: ${(p) => (p.row ? "row" : "column")};
  justify-content: ${(p) => p.justify || "flex-start"};
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
  margin-left: ${(p) => perfectSize(p.ml) || 0}px;
  margin-right: ${(p) => perfectSize(p.mr) || 0}px;
  margin-bottom: ${(p) => perfectSize(p.mb) || 0}px;
  padding-top: ${(p) => perfectSize(p.pt) || 0}px;
  padding-bottom: ${(p) => perfectSize(p.pb) || 0}px;
  padding-left: ${(p) => perfectSize(p.pl) || 0}px;
  padding-right: ${(p) => perfectSize(p.pr) || 0}px;
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "nowrap")};
  background-color: ${(p) => p.bg || "none"};
  border-radius: ${({ br }) => perfectSize(br) || 0}px;
`;
