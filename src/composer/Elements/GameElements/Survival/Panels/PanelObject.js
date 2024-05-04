import React from 'react';
import styled from "styled-components";

import Objects from '../Objects/Objects.js';

const PanelObjects = (props) => {

    //const appState = React.useContext(AppStateContext);

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
    return (
        <DivPanel>
            <ButtonDiv style={{ width: "fit-content" }} onClick={() => { props.setSelectOption("INIT") }}>Pantalla inicial</ButtonDiv>
            <Objects objectsKey={props.objectsKey} setObjectsKey={props.setObjectsKey} activeHover={true} />
        </DivPanel>
    );
}
export default PanelObjects;