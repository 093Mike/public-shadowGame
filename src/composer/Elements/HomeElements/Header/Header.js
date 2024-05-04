import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { TiUser } from "react-icons/ti";
import { useLocation } from "react-router-dom";

import Element from "../../Element.js";
import Firebase from '../../../../FirebaseEngine/firebase.js';

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
  margin: 0;
  &>*{
      margin: 1vh 2vh;
  }
  @media (max-width: 426px) {
    flex-direction : column;
    overflow: hidden;
    justify-content: normal;
}
${props.params.styles}

`}`;

const DivPanel = styled.div`
    ${props => `
        background-color: rgba(216, 216, 216, 0.5);
        border-radius: 8px;
        width : 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 2vh 0;
        grid-gap: 1em;
        align-items: center;
        display: flex;
        justify-content: end;

    `}
`

const Text = styled.div`
    text-align: right;
    color: white;
    font-size: 2.5vh;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 2;
`;


const ButtonDiv = styled.div`
text-align: center;
border-radius: 0.7vh;
color: white;
background-color: red;
font-size: 2.5vh;
padding: 0.5vh;
width:100%;
border: 0.2vh solid transparent;
transition: all 0.1s ease 0s;
appearance: none;
cursor: pointer;
margin-top:0.5vh;
flex: 1;
&:hover{
    background-color: #b50000;
}
@media (max-width: 426px) {
    font-size:1.5rem;
}
`

const Header = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState(true);
    const f = new Firebase();
    const location = useLocation();

    useEffect(() => {
        f.getUserAuth().then(user => {
            setIsAuthenticated(user);
            setUser(user);
        });
    }, [f]);

    return (
        <Element params={props.params}>
            <Wrapper params={props.params}>
                <DivPanel style={!isAuthenticated ? { display: "none" } : {}}>
                    <ButtonDiv style={!(location.pathname === "/play") ? { display: "none" } : {}}> Inicio</ButtonDiv>
                    <Text>{user?.email?.split('@')[0]}</Text>
                    <TiUser style={{color: 'white', fontSize: '2.5vh'}}/>
                </DivPanel>
            </Wrapper>
        </Element>
    );
}
export default Header;