import React from 'react'
import { useDispatch } from 'react-redux';

import styled from "styled-components";

import Logo from "../images/Saemi-signature.png";

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

const ClickLogo = () => {
    return(
        <div>
            <img src={Logo} alt="logo" />
        </div>
    )
}

const AppBar = () => {
    const dispatch = useDispatch();
  const GetId = (id) =>{
    dispatch({type: "CLICKEDMENU", payload: id})
  }
  return (
    <StyledAppBarContainer>
        <div className='left'>
            <ClickLogo />
        </div>
        <div className='right'>
            <ul className='app-menu-list'>
                <li onClick={()=>GetId(0)}>
                    01. About
                </li>
                <li onClick={()=>GetId(1)}>
                    02. Experience
                </li>
                <li onClick={()=>GetId(2)}>
                    03. Work
                </li>
                <li onClick={()=>GetId(3)}>
                    04. Skills
                </li>
                <li onClick={()=>GetId(4)}>
                    Contact
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