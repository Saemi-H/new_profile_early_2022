import React from 'react'
import styled from "styled-components";

const StyledAppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    border: 1px solid red;
    padding: 0 50px;
    box-sizing: border-box;
    line-height: 100px;
    .right{
        width: 50%;
    }
    .app-menu-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        list-style: none;
    }
`;

const StyledButton = styled.button`
    background-color: transparent;
    height: 40px;
    line-height: 40px;
    border: 1px solid #fff;
    padding: 0 15px;
    border-radius: 4px;
`;

const ResumeButton = () => {
    return(
        <div>
            <StyledButton>
                Resume
            </StyledButton>
        </div>
    )
}

const AppBar = () => {
  return (
    <StyledAppBarContainer>
        <div className='left'>
            <h1>Logo</h1>
        </div>
        <div className='right'>
            <ul className='app-menu-list'>
                <li>
                    01. About
                </li>
                <li>
                    02. Experience
                </li>
                <li>
                    03. Work
                </li>
                <li>
                    04. Skills
                </li>
                <li>
                   <ResumeButton />
                </li>
            </ul>
        </div>
    </StyledAppBarContainer>
  )
}

export default AppBar