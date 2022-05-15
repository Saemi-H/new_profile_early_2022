import React, { useEffect, useRef } from 'react';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

import styled from "styled-components";

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

const StyledContent = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 5rem;
  box-sizing: border-box;
  @media only screen and (max-width: 1000px){
    width: 100%;
    padding: 1rem;
    padding-top:0;
  }
`;

const StyledButton = styled.button`
    background-color: transparent;
    height: 40px;
    line-height: 40px;
    border: 1px solid #fff;
    padding: 0 15px;
    border-radius: 4px;
    &:hover{
        border-color: #59e5c7;
    }
    > .link-style{
        color: #fff;
        &:hover{
            color: #59e5c7;
        }
    }
`;

const GoToButton = ({name, address}) => {
  return(
    <StyledButton>
    <Link
    className='link-style'
    to="#"
    target="_blank"
    onClick={(e) => {
      window.location.href = address;
      e.preventDefault();
    }}
    >
      {name}
    </Link>
    </StyledButton>
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
      <GoToButton name={"Notion"} address={"https://www.notion.so/c734ea141660446d9ad6dec1b79f00d2"} />
      <GoToButton name={"Email"} address={"mailto:saemi.h@outlook.com"} />
    </StyledContent>
    </>
  )
}

export default Contact