import React, {useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux';

import styled from "styled-components";
import avatar from "../images/avatar.png";

const StyledTitleBox = styled.div`
    border: 1px solid green;
    text-align: left;
    >p::after{
        display: inline-block;
        content: "";
        height: 1px;
        background-color: rgba(255, 255, 255, 0.3);
        margin-left: 1rem;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
        .intro{
            width: 50%;
        }
`;


const IntroIndex = () => {
const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "SAVEOFFSETTOP", payload: {id: 0, top: sectionRef.current.offsetTop}})
  }, [sectionRef.current])
  return (
    <>
        <StyledTitleBox ref={sectionRef}>
          <p>01. About Me</p>
      </StyledTitleBox>
      <StyledContainer>
              <div className='intro'>
                  안녕하세요!
              </div>
          </StyledContainer>
    </>
  )
}

export default IntroIndex