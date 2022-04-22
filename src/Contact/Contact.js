import React, { useEffect, useRef } from 'react';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

import styled from "styled-components";

import { Button } from 'antd';

const StyledTitleBox = styled.div`
    font-size: 2rem;
    margin-bottom: 40px;
    >p::after{
        display: inline-block;
        content: "";
        height: 1px;
        background-color: rgba(255, 255, 255, 0.3);
        margin-left: 1rem;

    }
`;
const StyledColor = styled.span`
    color: #59e5c7;
`;

const StyledContent = styled.div`
  width: 50%;
  position: relative;
  text-align: center;
  padding: 5rem;
  box-sizing: border-box;
  @media only screen and (max-width: 1000px){
    width: 100%;
    padding-top:0;
  }
`;

const GoToButton = ({name, address}) => {
  return(
    <Button>
    <Link
    to="#"
    onClick={(e) => {
      window.location.href = address;
      e.preventDefault();
    }}
    >
      {name}
    </Link>
    </Button>
  )
}

const Contact = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "SAVEOFFSETTOP", payload: {id: 4, top: sectionRef.current.offsetTop}})
  }, [sectionRef.current])

  return (
    <>
    <StyledTitleBox ref={sectionRef}>Contact</StyledTitleBox>
    <StyledContent>
      <GoToButton name={"RocketPunch 가기"} address={"https://www.rocketpunch.com/@saemihsecret"} />
      <GoToButton name={"Programmers 가기"} address={"https://programmers.co.kr/pr/sstyle940104_991"} />
      <GoToButton name={"이메일 보내기"} address={"mailto:saemi.h@outlook.com"} />
    </StyledContent>
    </>
  )
}

export default Contact