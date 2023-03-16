import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface StyleProps {
  mt?: number;
  width?: number;
  mh?: number;
  jcon?: string;
  ai?: string;
  bg?: string;
  color?: string;
}

export const InputField = styled.TextInput<StyleProps>`
  width: ${perfectSize(370)}px;
  height: ${perfectSize(40)}px;
  padding-left: ${perfectSize(8)}px;
  background-color: ${(p) => (p.bg ? p.bg : "#f0f0f0")};
  color: ${(p) => (p.color ? p.color : "#000")};
  border: 1px solid #000;
  border-radius: ${perfectSize(14)}px;
  font-size: ${perfectSize(14)}px;
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
`;

export const InputWrapper = styled.View<StyleProps>`
  flex-direction: row;
  align-items: center;
  width: 94%;
  height: ${perfectSize(44)}px;
  border-radius: ${perfectSize(14)}px;
  background-color: ${(p) => p.bg || "#FFF"};
  color: "#f0f0f0";
  padding-left: ${perfectSize(10)}px;
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
`;
