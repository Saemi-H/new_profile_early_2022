import React from 'react'
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
  return (
    <StyledAppBarContainer>
        <CloseButton />
    </StyledAppBarContainer>
  )
}

export default ResponsiveAppBar