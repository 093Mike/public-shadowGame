import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import imgContentShow from "../../assets/img/contrashow.png";
import imgContentHide from "../../assets/img/contrahide.png";
import Firebase from '../../FirebaseEngine/firebase';

const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
  background-size: cover;
  text-align:center;
  display: flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  flex-direction:column;
  &>*{
      margin: 1vh 2vh;
  }
  @media (max-width: 426px) {
    flex-direction : column;
    overflow: auto;
    justify-content: normal;
}
  
`;

const Header = styled.div`
display:flex;
justifyContent:left; 
alignItems:center;
width:45%;
@media (max-width: 1024px) {
    width: 75vw;
}
@media (max-width: 426px) {
    width: 80vw;
}
`

const Back = styled.div`
    text-align: left;
    color: white;
    background-color: red;
    border-radius: 1vh;
    font-size:1.8vh;
    width: min-content;
    width: 8vh;
    height: 4.5vh;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.1s ease 0s;
    @media (max-width: 426px) {
        font-size:1rem;
    }
`
const Title = styled.h1`
  ${props => `
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size:4.5vh;
    margin : 0 1vw;

    @media (max-width: 700px) {
        font-size:2rem;
    }
    @media (max-width: 426px) {
        font-size:2rem;
    }
    ${props?.styles};
  `}
`

const Descripcion = styled.p`
  ${props => `
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size:2.4vh;
    margin : 0 1vw;
    @media (max-width: 426px) {
        font-size:1.5rem;
    }
    ${props?.styles};
  `}
`
const DivRegistro = styled.div`
    ${props => `
        background-color: rgba(216, 216, 216, 0.5);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        padding: 2vh;
        align-items: center;
        ${props.view ? "width: 42%;" : "width: 45%;"}
        @media (max-width: 1024px) {
            width: 75vw;
        }
        @media (max-width: 426px) {
            width: 80vw;
        }
    `}
`
const EmailInput = styled.input`
border-radius: 13px;
background-color: white;
font-size: 2.3vh;
padding: 7px;
transition: all 0.1s ease 0s;
margin: 10px auto;
width: 61%;
border: 0 solid;
outline:none;
padding:1vh;
height:4vh;
padding-right:0;
@media (max-width: 1024px) {
    padding:0.5rem;
    padding-right:0;
    height:2rem;
    font-size: 1.5rem;
    width: 75%;
}

`
const PwdDiv = styled.div`
border-radius: 13px;
background-color: white;
font-size: 2vh;
padding: 7px;
transition: all 0.1s ease 0s;
margin: 10px auto;
width: 61%;
display: flex;
border: 0 solid;
padding:1vh;
padding-right:0;
height:4vh;
@media (max-width: 1024px) {
    padding:0.5rem;
    padding-right:0;
    height:2rem;
    font-size: 1.5rem;
    width: 75%;
}

`
const PwdInput = styled.input`
    display: flex;
    width: 87%;
    border: 0px;
    font-size: 2.3vh;
    background-color: white;
    outline:none;
    @media (max-width: 426px) {
        font-size: 1.5rem; 
    }
`
const Eye = styled.i`
    background: url('${imgContentHide}') no-repeat center;
    background-size: 80% auto;
    width: 10%;
    cursor: pointer;
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
width: 60%;
margin-top:1vh;
@media (max-width: 426px) {
    font-size:1.5rem;
}
`



const Registro = () => {

    const [view, setView] = useState(0);
    const navigate = useNavigate();
    let f = new Firebase();

    const changePassType = (e) => {
        if (e.target.parentNode.firstChild.type === 'password') {
            e.target.style.background = "url(" + imgContentHide + ") no-repeat center";
            e.target.style.backgroundSize = "80% auto";
            e.target.parentNode.firstChild.type = 'text';
        } else {
            e.target.style.background = "url(" + imgContentShow + ") no-repeat center ";
            e.target.style.backgroundSize = "80% auto";
            e.target.parentNode.firstChild.type = 'password'
        }
    }

    const registroUser = (email, pwd) => {
        if(email.length >= 4 && email.includes("@") && pwd.length >= 6){
            f.signInWithEmail(email,pwd)
        }else{
         
        }
    }
    const registroGoogle = () =>{
        f.signInWithGoogle();
    }

    const goHome = () =>{
        navigate("/");
    }

    const goLogin = () =>{
        navigate("/login");
    }

    return (
        <>
            <Wrapper>
                <Header>
                    <Back onClick={(e)=>{ view === 0 ? goHome() : setView(0)}}>Volver</Back>
                    <Title>Registro</Title>
                </Header>

                <DivRegistro>
                    <EmailInput id={"email"} type={"email"} placeholder="Email"/>
                    <PwdDiv>
                        <PwdInput type="password" id={"password"}  placeholder="Contraseña"/>
                        <Eye onClick={(e) => { changePassType(e) }} ></Eye>
                    </PwdDiv>
                    <ButtonDiv onClick={(e) => {registroUser(document.getElementById("email").value, document.getElementById("password").value)}}>Registrarse</ButtonDiv>
                </DivRegistro>
                <DivRegistro>
                    <Descripcion>O también puedes:</Descripcion>
                    <ButtonDiv onClick={(e) => {registroGoogle()}}><FaGoogle style={{fontSize: '2.5vh', marginRight:'1vh'}}/>Registrarse con Google</ButtonDiv>
                </DivRegistro>
                <Descripcion style={{cursor:'pointer'}} onClick={(e)=>{goLogin()}}>Iniciar Sesión</Descripcion>
            </Wrapper>
        </>
    );
}
export default Registro;