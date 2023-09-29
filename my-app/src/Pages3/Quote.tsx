import React from "react";
import styled from "styled-components";
import img from "../Assets/quote.png";
import { ImQuotesLeft } from "react-icons/im";

const Quote = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Img src={img} />
          </Left>
          <Right>
            <Logo>
              <ImQuotesLeft />
            </Logo>
            <Text>
              <h5>
                "Thanks to the Bolt Food platform, we've seen a signficant
                growth in sales, which has allowed us to expand and open new
                loactions.'
              </h5>
              <h3>Maarja Kelder, owner, 'Nuudel'.</h3>
            </Text>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Quote;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const Left = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  /* background-color: black; */
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-left: 60px;
  /* margin-bottom: 100px; */
`;

const Text = styled.div`
  height: 300px;
  width: 550px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  /* background-color: purple; */
  h5 {
    font-size: 22px;
    flex-wrap: wrap;
    font-weight: 450;
    margin-top: 0px;
  }
  h3 {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const Logo = styled.div`
  font-size: 70px;
  color: green;
`;

const Right = styled.div`
  height: 100%;
  width: 40%;
  /* background-color: blue; */
  display: flex;
  margin-left: 15px;
  justify-content: space-between;
  /* padding-bottom: 50px; */
  padding-top: 50px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 96%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
`;
