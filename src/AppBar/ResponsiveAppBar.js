import React from 'react'
import { useDispatch } from 'react-redux';

import styled from "styled-components";

import {CloseOutlined} from "@ant-design/icons"

const StyledAppBarContainer = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: #112240;
`;

const CloseButton = () =>{
    return(
        <div>
            <CloseOutlined style={{color: "#fff"}} />
        </div>
    )
}

const ResponsiveAppBar = () => {
    const dispatch = useDispatch();
  const GetId = (id) =>{
    dispatch({type: "CLICKEDMENU", payload: id})
  }
  return (
    <StyledAppBarContainer>
        <CloseButton />
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
                   <ResumeButton />
                </li>
            </ul>
        </div>
    </StyledAppBarContainer>
  )
}

export default ResponsiveAppBar