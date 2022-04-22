import React, { useEffect, useRef } from 'react';

import styled from "styled-components";

import { useDispatch } from 'react-redux';

const StyledTitleBox = styled.div`
    text-align: left;
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

const Skills = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "SAVEOFFSETTOP", payload: {id: 3, top: sectionRef.current.offsetTop}})
  }, [sectionRef.current])
  return (
    <>
    <StyledTitleBox ref={sectionRef}><StyledColor>04.</StyledColor> Skills</StyledTitleBox>
    <div></div>
    </>
  )
}

export default Skills