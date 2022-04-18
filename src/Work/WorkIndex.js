import React from 'react'
import styled from "styled-components";
import { Carousel, Radio } from 'antd';


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

const contentStyle = {
    height: '160px',
    textAlign: 'left',
    color: "#fff",
    border: "1px solid yellow"
  };

const WorkIndex = () => {
    const [dotPosition, setDotPosition] = React.useState('left');


    return (
    <><StyledTitleBox>
            <p>02. Saemi's TimeLine</p>
        </StyledTitleBox>
        <Carousel dotPosition={dotPosition}>
                <div>
                    <div style={contentStyle}>Front-End Developer @SpringCloud</div>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel></>
  )
}

export default WorkIndex