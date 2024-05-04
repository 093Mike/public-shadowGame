import React, { useState } from "react";
import styled from "styled-components";
import Element from "../../Element";
import ModalMessage from "../../../ModalMessage";
import Firebase from "../../../../FirebaseEngine/firebase";
import AppStateContext from "../../../../appState/AppStateContext";

const Wrapper = styled.div`
    background-color: rgba(216, 216, 216, 0.5);
    border-radius: 8px;
    display: flex;
    width : 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    padding: 0;
    flex-direction: column;
    overflow: auto;
`;

const DivOptions = styled.div`
    display: flex;
    width : 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    justify-content: center;
    grid-gap: 1em;
    padding: 0;
    overflow: auto;
`;

const DivOption = styled.div`
${props => `
    background-color: ${props.active ? "red" : "white"};
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 8px;
    width: 12vw;
    padding: 0;
    overflow: auto;
    transition: all 0.1s ease 0s;
    color: ${props.active ? "white" : "black"};
    &:hover{
        background-color: ${props.active ? "#b50000" : "rgba(216, 216, 216, 0.8)"} ;
    }
`}`;

const DivInputNameCharacter = styled.div`
    display: flex;
    width : 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    padding: 0;
    overflow: auto;
`;

const ButtonDiv = styled.div`
${props => `
text-align: center;
border-radius: 0.7vh;
color: white;
background-color: red;
font-size: 3vh;
padding: 1vh 2vh;
width: min-content;
border: 0.2vh solid transparent;
transition: all 0.1s ease 0s;
appearance: none;
cursor: pointer;
margin: 1vh auto 1vh;
&:hover{
    background-color: #b50000;
}
@media (max-width: 426px) {
    font-size:1.5rem;
}
`}`;

const EmailInput = styled.input`
border-radius: 13px;
background-color: white;
font-size: 2.3vh;
padding: 7px;
transition: all 0.1s ease 0s;
margin: 10px auto;
width: 30vw;
border: 0 solid;
outline:none;
padding:1vh;
height:4vh;
padding-right:0;
@media (max-width: 426px) {
    padding:0.5rem;
    padding-right:0;
    height:2rem;
    font-size: 1.5rem;
    width: 75%;

}
`

const InitCharacter = (props) => {
    const [modal, setModal] = useState(false);
    const [genero, setGenero] = useState("");

    const appState = React.useContext(AppStateContext);
    let progress = appState.state.get("progressDay");

    let f = new Firebase();

    const sendData = () => {
        let TEMP_name = document.getElementById("nombre").value;
        console.log(TEMP_name);
        if(genero !== null && TEMP_name.trim() !== ""){
            if(genero === "H"){
                console.log(progress+1);
                f.addDataGame({progress:progress+1, primarycharacter: "aron", name:TEMP_name})
            }else{
                f.addDataGame({progress:progress+1, primarycharacter: "eli", name:TEMP_name})
            }
        }else{
            setModal(true);
        }
    }


    return (
        <>
            <Element params={props.params}>
                <Wrapper params={props.params}>
                    <h1>Selecciona el genero del personaje:</h1>
                    <DivOptions>
                        <DivOption active={genero === "H"} onClick={() => { setGenero("H") }}>Niño</DivOption>
                        <DivOption active={genero === "D"} onClick={() => { setGenero("D") }}>Niña</DivOption>
                    </DivOptions>
                    <h1>Escribe un nombre:</h1>
                    <DivInputNameCharacter>
                        <EmailInput id={"nombre"} placeholder="Escribe el nombre del personaje" />
                    </DivInputNameCharacter>
                    <ButtonDiv onClick={()=>{sendData()}}>Continuar</ButtonDiv>
                </Wrapper>
            </Element>
            <ModalMessage
                isShown={modal}
                setIsShown={setModal}
                title={"Introducción"}
                titleStyle={`font-size:2.1vh; margin-left:3vh;`}
                boxSize={`
                    width: 40rem;
                    background-color: rgba(216,216,216,1);
                    `}
                styleMain={`
                    border-bottom-left-radius:1vh;
                    border-bottom-right-radius:1vh;
                    height: 15vh !important;
                    display: flex;
                    text-align: justify !important;
                    justify-content: space-around;
                    flex-direction:column;
                    font-size: 1.5rem;
                    padding: 1vw;
                    `}
            >
                ¡Debes de introduccir todos los datos!
            </ModalMessage>
        </>
    );
}
export default InitCharacter;