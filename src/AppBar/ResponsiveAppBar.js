import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import styled from "styled-components";

import {CloseOutlined} from "@ant-design/icons"

const StyledAppBarContainer = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: #112240;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    padding: 10px;
    box-sizing: border-box;
    .app-menu-list{
        list-style: none;
        margin-top: 30%;
        > li{
            text-align: left;
            margin-bottom: 10%;
            cursor: pointer;
            &:hover{
            color: #59e5c7;
        }
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
        {name}
      </Link>
      </StyledButton>
    )
  }

const CloseButton = ({setMenuState}) =>{
    const dispatch = useDispatch();

    const handleClose = () => {
        setMenuState(false);
        dispatch({type: "OPENMENU", payload: false})
    }
    return(
        <div style={{textAlign: 'left', cursor: "pointer"}} onClick={handleClose}>
            <CloseOutlined style={{color: "#fff"}} />
        </div>
    )
}

const ResponsiveAppBar = () => {
const openState = useSelector((state) => state.menuReducer.menuOpen);
const [menuState, setMenuState] = useState(openState);
const dispatch = useDispatch();
  
    const GetId = (id) =>{
    dispatch({type: "CLICKEDMENU", payload: id})
  }

  return (
    menuState && <StyledAppBarContainer>
        <CloseButton setMenuState={setMenuState}/>
        <div>
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
        </div>
    </StyledAppBarContainer>
  )
}
export default ResponsiveAppBar