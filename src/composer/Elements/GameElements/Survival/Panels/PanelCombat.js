import React from 'react';
import styled from "styled-components";
import { Divider } from "@react-md/divider";

import AppStateContext from '../../../../../appState/AppStateContext.js';

const PanelCombat = (props) => {
    const appState = React.useContext(AppStateContext);
    let chapter = appState.state.get("numChapter");
    const ButtonDiv = styled.div`
    ${props => `
    text-align: center;
    border-radius: 0.7vh;
    color: white;
    background-color:  red;
    font-size: 3vh;
    padding: 1vh;
    width:100%;
    border: 0.2vh solid transparent;
    transition: all 0.1s ease 0s;
    appearance: none;
    cursor: pointer;
    margin-top:1vh;
    &:hover{
        background-color: #b50000;
    }
    @media (max-width: 426px) {
        font-size:1.5rem;
    }
    `}`;

    const DivPanel = styled.div`
    ${props => `
        background-color: rgba(216, 216, 216, 0.5);
        border-radius: 8px;
        display: flex;
        width : 100%;
        height:100%;
        max-width: 100%;
        max-height: 100%;
        flex-direction: column ;
        padding: 2vh;
        grid-gap: 1em;
    `}
`

const InfoWarn = styled.p`
    color: white;
    font-size: 4vh;
    text-align:left;
    margin: 0vh
`;
const InfoPWarn = styled.p`
    color: white;
    font-size: 2.5vh;
    text-align:left;
    margin: 0vh
`;


    return (
        <DivPanel>
            <ButtonDiv style={{ width: "fit-content" }} onClick={() => { props.setSelectOption("INIT") }}>Pantalla inicial</ButtonDiv>
            {chapter === "Prologo" ?
                <>
                    <InfoWarn>¡Que guay!</InfoWarn>
                    <Divider style={{ width: "100%" }} />
                    <InfoPWarn>Vas ha poder jugar con tus amigos en el XXXXX.</InfoPWarn>
                    <ButtonDiv style={{ width: "initial" }} onClick={() => { props.setSelectOption("INIT") }}>¿Visitar parque?</ButtonDiv>

                </>
                :
                <>
                    <InfoWarn>Atención</InfoWarn>
                    <Divider style={{ width: "100%" }} />
                    <InfoPWarn>Entrenar tus poderes puede afectar tus niveles de hambre y sed, ademas de poder sufrir daños. Consideralo antes de pulsar "Entrenar".</InfoPWarn>
                    <InfoPWarn>INFO: Solo puedes entrenar 2 veces al día</InfoPWarn>
                    <Divider style={{ width: "100%" }} />
                    <ButtonDiv style={{ width: "initial" }} onClick={() => { props.setSelectOption("INIT") }}>Entrenar</ButtonDiv>
                </>

            }
        </DivPanel>
    );
}
export default PanelCombat;