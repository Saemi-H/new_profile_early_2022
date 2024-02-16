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
          <p>홍새미</p>
          <p>1994.01.04</p>
        </StyledLeftSide>
        <StyledRightSide>
          안녕하세요! UI/UX에 대해 고민하는 사용자 입장에서 생각하는 개발자
          홍새미 입니다 :) UI 퍼블리싱에서 나아가 JS로 코딩하는 것에 흥미가 생겨
          FE 개발자 길을 택하게 되었습니다. 새로운 기술을 학습하고 공유하기를
          좋아하고 팀워크를 중요하게 생각합니다. 클린 코딩을 지향하고 새로운
          stack을 함께 쌓아갈 수 있도록 하겠습니다.
        </StyledRightSide>
      </StyledContainer>
    </>
  );
};

export default IntroIndex;
