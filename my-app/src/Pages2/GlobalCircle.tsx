import React from "react";
import styled from "styled-components";
interface iCircle {
  ht: string;
  wd: string;
  bgc: string;
  text: string;
  br: string;
  col: string;
}
const GlobalCricle: React.FC<iCircle> = ({ ht, wd, bgc, text, br, col }) => {
  return (
    <div>
      <Container col={col} bgc={bgc} wd={wd} ht={ht} br={br}>
        {text}
      </Container>
    </div>
  );
};

export default GlobalCricle;
const Container = styled.div<{
  ht: string;
  wd: string;
  bgc: string;
  br: string;
  col: string;
}>`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  align-items: center;
  color: ${({ col }) => col};
  height: ${({ ht }) => ht};
  width: ${({ wd }) => wd};
  background-color: ${({ bgc }) => bgc};
  border-radius: ${({ br }) => br};
`;
