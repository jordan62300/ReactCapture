import React from "react";
// img
import home1 from "../img/home1.png"
// Styled
import styled from 'styled-components';

const AboutSection = () =>{
    return(
        <StyledAbout>
            <StyledDescription className="description">
                <div className="title">
                    <StyledHide className="hide">
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide className="hide">
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or video ideas you have . We have professionals for you</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage className="image">
                <img src={home1} alt="image of a man with a camera"/>
            </StyledImage>
        </StyledAbout>
    )
};

// Style components

const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 5rem 10rem;
    color:#fff;
`;
const StyledDescription = styled.div`
    flex:1;
    padding-right:5rem;
    h2{
        font-weight:lighter;
    }
`;

const StyledImage = styled.div`
    flex:1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
`

const StyledHide = styled.div`
    overflow:hidden;
`

export default AboutSection;