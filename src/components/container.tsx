import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface Style {
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
  bg?: string;
}

export const Container = styled.View<Style>`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.bg || "#fff"};
  padding-top: ${(p) => perfectSize(p.pt) || 0}px;
  padding-bottom: ${(p) => perfectSize(p.pb) || 0}px;
  padding-left: ${(p) => perfectSize(p.pl) || 0}px;
  padding-right: ${(p) => perfectSize(p.pr) || 0}px;
`;
