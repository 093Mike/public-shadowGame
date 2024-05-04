import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Firebase from '../../../../FirebaseEngine/firebase.js';
import Element from "../../Element.js";

const Wrapper = styled.div`
${props => `
  background-size: cover;
  text-align:center;
  display: flex;
  align-items:center;
  justify-content:center;
  max-width: 100%;
  max-height: 100%;
  flex-direction:column;
  &>*{
      margin: 1vh 2vh;
  }
  @media (max-width: 426px) {
    overflow: hidden;
    &>*{
        margin: 0;
    }
}
${props.params.styles}

`}`;

const DivPanel = styled.div`
    ${props => `
        background-color: rgba(216, 216, 216, 0.5);
        border-radius: 8px;
        display: flex;
        width : 100%;
        max-width: 100%;
        max-height: 100%;
        flex-direction: row ;
        padding: 2vh 2vh;
        grid-gap: 1em;
        align-items: center;
        @media (max-width: 510px) {
            width: 90%;
            background-color: transparent;
            flex-direction: column;
        }
    `}
`


const ButtonDiv = styled.div`
text-align: center;
border-radius: 0.7vh;
color: white;
background-color: red;
font-size: 3vh;
padding: 1vh;
border: 0.2vh solid transparent;
transition: all 0.1s ease 0s;
appearance: none;
cursor: pointer;
margin-top:1vh;
flex: 1;
&:hover{
    background-color: #b50000;
}
@media (max-width: 510px) {
    font-size:1.5rem;
    width: 100%;
}
`

const Header = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const f = new Firebase();
    const navigate = useNavigate();
   
    const goToPage = (path) =>{
        navigate(path);
    }

    useEffect(() => {
        f.getUserAuth().then(user => {
          setIsAuthenticated(user);
        });
      }, [f]);

    return (
        <Element params={props.params}>
            <Wrapper params={props.params}>
                <DivPanel style={isAuthenticated ? {display: "none"} : {}}>
                    <ButtonDiv onClick={(e)=>{goToPage("/login")}}>Iniciar Sesión</ButtonDiv>
                    <ButtonDiv onClick={(e)=>{goToPage("/signin")}}>Registrarse</ButtonDiv>
                </DivPanel>
                <DivPanel style={!isAuthenticated ? {display: "none"} : {}}>
                    <ButtonDiv onClick={(e)=>{goToPage("/play")}}>¡Jugar!</ButtonDiv>
                </DivPanel>
            </Wrapper>
        </Element>
    );

}
export default Header;

