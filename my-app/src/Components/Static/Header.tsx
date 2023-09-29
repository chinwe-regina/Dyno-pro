import styled from "styled-components";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";
import img from "../../Assets/download (1).svg";
import img1 from "../../Assets/ng.svg";
import { FaBicycle, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState<boolean>(false);

  const ToggleShow = () => {
    setShow(!show);
  };

  const headerChange = () => {
    if (window.scrollY <= 70) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", headerChange);
  return (
    <div>
      {header ? (
        <Container style={{ background: "transparent", color: "white" }}>
          <Wrapper>
            <LogoHold src={img}></LogoHold>
            <NavHold>
              <Nav1>
                <Circle src={img1}></Circle>
                <p>Nigeria (EN)</p>
                <Icon>
                  <BiSolidDownArrow />
                </Icon>
              </Nav1>
              <p>Support</p>
              <Button onClick={ToggleShow}>Sign up</Button>
              {show ? (
                <Card>
                  <Cwrapper>
                    <Na1>
                      <Icons>
                        <FaBicycle />
                      </Icons>
                      <Link to="/homescreen">
                        <Box>
                          <h3>Become a courier</h3>
                          <p>Deliver food and get paid weekly</p>
                        </Box>
                      </Link>
                      <Icons>
                        <FaAngleRight />
                      </Icons>
                    </Na1>
                    <Na1>
                      <Icons>
                        <FaBicycle />
                      </Icons>
                      <Link to="/homes">
                        <Box2>
                          <h3>Become a courier</h3>
                          <p>Deliver food and get paid weekly</p>
                        </Box2>
                      </Link>
                      <Icons>
                        <FaAngleRight />
                      </Icons>
                    </Na1>
                  </Cwrapper>
                </Card>
              ) : null}

              <Nav4>
                <FiMenu />
              </Nav4>
            </NavHold>
          </Wrapper>
        </Container>
      ) : (
        <Container style={{ background: "white" }}>
          <Wrapper2>
            <h5>Bolt Food partners</h5>
            <NavHold2>
              <p>Overview</p>
              <p>Insight</p>
              <p>FAQ</p>
              <Button2>Get Started</Button2>
            </NavHold2>
          </Wrapper2>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Icons = styled.div``;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin-left: 15px;
  margin-top: 25px;
  font-size: 15px;
  p {
    margin-top: 0;
    font-size: 10px;
  }
  :hover {
    cursor: pointer;
    transition: all 350ms;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 100px;
  margin-left: 15px;
  margin-top: 25px;
  font-size: 15px;
  p {
    margin-top: 0;
    font-size: 13px;
  }
  :hover {
    cursor: pointer;
    transition: all 350ms;
  }
`;

const Na1 = styled.div`
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  line-height: 15px;
`;

const Cwrapper = styled.div`
  height: 300px;
  width: 200px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: column;
  line-height: px;
`;
const Card = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba (99, 99, 99, 0.7) 0px 2px 8px 0px;
  background-color: white;
  top: 80px;
  right: 150px;
  position: absolute;
  z-index: 2;
`;

// const Nav4 = styled.div``

const Button2 = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  background-color: black;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 550;
  color: white;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const NavHold2 = styled.div`
  height: 60px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 70px;
  /* background-color: purple; */
  p {
    font-size: 18px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Wrapper2 = styled.div`
  height: 60px;
  width: 96%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 20px;
  }
`;

const Nav4 = styled.div`
  font-size: 25px;
  margin-right: 25px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  background-color: black;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 550;
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Circle = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  /* background-color: grey; */
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Nav1 = styled.div`
  width: 140px;
  display: flex;
  /* background-color: orange; */
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
  }

  p {
    font-size: 18px;
    /* font-weight: 550; */
  }
`;

const NavHold = styled.div`
  height: 60px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: purple; */
  p {
    font-size: 18px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
const LogoHold = styled.img`
  width: 55px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const Wrapper = styled.div`
  height: 60px;
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 1026px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Container = styled.div`
  height: 70px;
  width: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  position: fixed;
  z-index: 10;
`;
