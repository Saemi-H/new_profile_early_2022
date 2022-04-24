import React from 'react'
import {Link} from "react-router-dom"

import { useDispatch } from 'react-redux';

import styled from "styled-components";
import { MenuOutlined } from '@ant-design/icons';

import Logo from "../images/Saemi-signature.png";

const StyledAppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
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
        > li{
            &:hover{
                cursor: pointer;
                color: #59e5c7;
            }
        }
    }
    .reponsive-app-bar{
        display: none;
    }

    @media only screen and (max-width: 1000px){
    .app-menu-list{
        display: none;
    }
    .right{
       text-align: right;
    }
    .reponsive-app-bar{
        display: inline-block;
    }
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
      to="#"
      onClick={(e) => {
        window.location.href = address;
        e.preventDefault();
      }}
      className='link-style'
      >
        {name} 바로가기
      </Link>
      </StyledButton>
    )
  }

const ClickLogo = () => {
    return(
        <div>
            <Link to="/">
            <img src={Logo} alt="logo" />
            </Link>
        </div>
    )
}

const ResponsiveAppBar = () => {
    const dispatch = useDispatch();

    const open = () =>{
        dispatch({type: "OPENMENU", payload: true})
    }
    return(
        <div style={{cursor: "pointer"}} onClick={open}>
            <MenuOutlined />
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
                   <GoToButton name={"GitHub"} address={"https://github.com/hsm0104"} />
                </li>
            </ul>
            <div className="reponsive-app-bar">
                <ResponsiveAppBar />
            </div>
        </div>
    </StyledAppBarContainer>
  )
}

export default AppBar