import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface Props {
  color?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  align?: string;
  width?: number;
  pr?: number;
  pl?: number;
}

export const H1 = styled.Text<Props>`
  font-size: ${perfectSize(30)}px;
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const H2 = styled.Text<Props>`
  font-size: ${perfectSize(28)}px;
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const H3 = styled.Text<Props>`
  font-size: ${perfectSize(24)}px;
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const Subhead = styled.Text<Props>`
  font-size: ${perfectSize(16)}px;
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  margin-right: ${(p) => (p.mr ? perfectSize(p.mr) : 0)}px;
  padding-right: ${(p) => (p.pr ? perfectSize(p.pr) : 0)}px;
  padding-left: ${(p) => (p.pl ? perfectSize(p.pl) : 0)}px;
`;
export const Body = styled.Text<Props>`
  width: ${(p) => perfectSize(p.width) || "auto"};
  font-size: ${perfectSize(14)}px;
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  padding-right: ${(p) => (p.pr ? perfectSize(p.pr) : 0)}px;
  padding-left: ${(p) => (p.pl ? perfectSize(p.pl) : 0)}px;
`;
export const Caption = styled.Text<Props>`
  font-size: ${perfectSize(14)}px;
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-bottom: ${(p) => (p.mb ? perfectSize(p.mb) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const NavigationBar = styled.Text<Props>`
  font-size: ${perfectSize(18)}px;
  font-weight: bold;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
`;
export const SmallCaption = styled.Text<Props>`
  font-size: ${perfectSize(11)}px;
  color: ${(p) => (p.color ? p.color : "#999999")};
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
`;

export const Bold24 = styled.Text<Props>`
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-size: ${perfectSize(24)}px;
  font-weight: bold;
`;
export const Bold18 = styled.Text<Props>`
  font-size: ${perfectSize(18)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: bold;
`;
export const Medium18 = styled.Text<Props>`
  font-size: ${perfectSize(18)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
export const Regular18 = styled.Text<Props>`
  font-size: ${perfectSize(18)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const Medium16 = styled.Text<Props>`
  font-size: ${perfectSize(16)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
export const Bold14 = styled.Text<Props>`
  font-size: ${perfectSize(14)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: bold;
`;
export const Medium14 = styled.Text<Props>`
  font-size: ${perfectSize(14)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
export const Regular14 = styled.Text<Props>`
  font-size: ${perfectSize(14)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const Medium13 = styled.Text<Props>`
  font-size: ${perfectSize(13)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
export const Regular13 = styled.Text<Props>`
  font-size: ${perfectSize(13)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;

export const Medium12 = styled.Text<Props>`
  font-size: ${perfectSize(12)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
export const Regular12 = styled.Text<Props>`
  font-size: ${perfectSize(12)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;

export const Medium11 = styled.Text<Props>`
  font-size: ${perfectSize(11)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
export const Medium10 = styled.Text<Props>`
  font-size: ${perfectSize(10)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
export const Medium9 = styled.Text<Props>`
  font-size: ${perfectSize(9)}px;
  width: ${(p) => perfectSize(p.width) || "auto"};
  text-align: ${(p) => (p.align ? p.align : "left")};
  color: ${(p) => (p.color ? p.color : "#fff")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  font-weight: 500;
`;
