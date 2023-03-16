import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface StyledProps {
  color?: string;
  mt?: number;
}

export const RoundedButton = styled.TouchableOpacity<StyledProps>`
  width: ${perfectSize(370)}px;
  height: ${perfectSize(40)}px;
  border-radius: ${perfectSize(14)}px;
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.color || "#01c355"};
`;
