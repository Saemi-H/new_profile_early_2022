import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import avatar from "../../images/avatar.png";

const StyledAvatar = styled.img`
  width: 20%;
`;

const StyledLeftSide = styled.div`
  width: 50%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledRightSide = styled.div`
  width: 50%;
  position: relative;
  text-align: center;
  padding: 5rem;
  box-sizing: border-box;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 0;
  }
`;

const StyledTitleBox = styled.div`
  margin-top: 50px;
  text-align: left;
  font-size: 2rem;
  margin-bottom: 40px;
  > p::after {
    display: inline-block;
    content: "";
    height: 1px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-left: 1rem;
  }
  @media only screen and (max-width: 1000px) {
    margin-top: 0;
  }
`;

const StyledColor = styled.span`
  color: #59e5c7;
`;

const StyledContainer = styled.div`
  padding: 30px 0px 100px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 0;
  }
`;

const IntroIndex = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "SAVEOFFSETTOP",
      payload: { id: 0, top: sectionRef.current.offsetTop },
    });
  }, [sectionRef.current]);
  return (
    <>
      <StyledTitleBox ref={sectionRef}>
        <p>
          <StyledColor>01.</StyledColor>About Me
        </p>
      </StyledTitleBox>
      <StyledContainer>
        <StyledLeftSide>
          <StyledAvatar src={avatar} alt="My Avatar" />
          <p>Saemi</p>
          <p>1994.01.04</p>
        </StyledLeftSide>
        <StyledRightSide>
          Welcome to Seami's Page! a seasoned web frontend developer with a
          dedicated focus on user interface and user experience considerations.
          The evolution from UI publishing to proficient JavaScript coding has
          propelled my journey as a Front-End (FE) developer. My commitment to
          continual learning, coupled with a passion for knowledge sharing,
          underscores my dedication to staying abreast of emerging technologies.
          I place a high premium on teamwork, recognizing its pivotal role in
          achieving successful outcomes. Adhering to the principles of clean
          coding, I am poised to contribute to the collaborative construction of
          innovative stacks. Looking forward to the opportunity to further
          enhance and optimize web development projects :)
        </StyledRightSide>
      </StyledContainer>
    </>
  );
};

export default IntroIndex;
