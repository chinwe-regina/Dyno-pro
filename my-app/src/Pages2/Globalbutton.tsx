import React from "react";
import styled from "styled-components";
interface iStyle {
  pad: string;
  bgc: string;
  col: string;
  text: string;
  h: string;
  w: string;
  mg: string;
  mt: string;
}
const Globalbutton: React.FC<iStyle> = ({
  pad,
  bgc,
  col,
  text,
  h,
  w,
  mg,
  mt,
}) => {
  return (
    <div>
      <Container w={w} pad={pad} bgc={bgc} col={col} h={h} mg={mg} mt={mt}>
        {text}
      </Container>
    </div>
  );
};

export default Globalbutton;
const Container = styled.button<{
  pad: string;
  bgc: string;
  col: string;
  h: string;
  w: string;
  mg: string;
  mt: string;
}>`
  padding: ${({ pad }) => pad};
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  background-color: ${({ bgc }) => bgc};
  color: ${({ col }) => col};
  display: flex;
  font-size: 14px;
  margin: ${({ mg }) => mg};
  margin-top: ${({ mt }) => mt};
  font-weight: 900;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
`;
