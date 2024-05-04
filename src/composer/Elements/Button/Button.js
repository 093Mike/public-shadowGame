import React from "react";
import styled from "styled-components";
import Element from "../Element.js";

const Wrapper = styled.div`
${props => `
text-align: center;
border-radius: 0.7vh;
color: white;
background-color: red;
font-size: 3vh;
padding: 1vh;
width:100%;
border: 0.2vh solid transparent;
transition: all 0.1s ease 0s;
appearance: none;
cursor: pointer;
margin-top:1vh;
&:hover{
    background-color: #b50000;;
}
@media (max-width: 426px) {
    font-size:1.5rem;
}
    ${props.params.styles}
`}`;



const Button = (props) => {
    return (
        <Element params={props.params}>
            <Wrapper params={props.params} onClick={()=>{props.params?.action()}}>{props.params.text}</Wrapper>
        </Element>
    );

}
export default Button;