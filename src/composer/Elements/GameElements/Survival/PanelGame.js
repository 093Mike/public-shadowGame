import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import Element from "../../Element.js";
import AppStateContext from '../../../../appState/AppStateContext.js';
import PanelInit from './Panels/PanelInit.js';
import PanelObjects from './Panels/PanelObject.js';
import PanelCombat from './Panels/PanelCombat.js';
import ModalMessage from '../../../ModalMessage.js';


const Wrapper = styled.div`
${props => `
  background-size: cover;
  text-align:center;
  display: flex;
  align-items:center;
  justify-content:left;
  max-width: 100%;
  max-height: 100%;
  height:100%;
  flex-direction:row;
  &>*{
      margin: 1vh 2vh;
  }
  @media (max-width: 426px) {
    flex-direction : column;
    overflow: auto;
    justify-content: normal;
}
${props.params.styles}

`}`;

const Day = styled.p`
    color: white;
    font-size: 3vh;
    text-align:left;
    margin: 0vh
`;

const Character = styled.p`
    color: white;
    font-size: 4vh;
    text-align:left;
    margin: 0vh
`;



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



const PanelGame = (props) => {
    const appState = React.useContext(AppStateContext);
    const [selectOption, setSelectOption] = useState("INIT");
    const [options, setOption] = useState();
    const [objects, setObjects] = useState(new Map());
    const [modal, setModal] = useState(false);

    const ButtonDiv = styled.div`
    ${props => `
    ${console.log(props.tag)}
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
        background-color: #b50000;
    }
    @media (max-width: 426px) {
        font-size:1.5rem;
    }
    `}`;

    let day = appState.state.get("dayChapter");
    let chapter = appState.state.get("numChapter");


    const addDay = () => {
        setModal(true);
        //f.addDataGame(day++);
    }

    let TEMP_Options = {
        DIALOGUE: "Dialogar",
        OBJECT: "Usar Objecto",
        ESCENARIO: "Mirar Escenario",
        JUGAR: "Jugar",
        COMBAT: `${chapter === "Prologo" ? `Jugar` : "Entrenar"}`,
    }

    const createOptions = () => {
        let views = [];
        props.params.options?.forEach(element => {
            views.push(
                <ButtonDiv tag={element} onClick={() => { console.log(element); setSelectOption(element) }}>{TEMP_Options[element]}</ButtonDiv>
            )
        });
        setOption(views)
    }

    const createPanel = () => {
        switch (selectOption) {
            case "INIT":
                return <PanelInit params={props.params} objectsKey={objects} />;
            case "OBJECT":
                return <PanelObjects objectsKey={objects} setObjectsKey={setObjects} setSelectOption={setSelectOption} />;
            case "COMBAT":
            case "JUGAR":
                return <PanelCombat params={props.params} setSelectOption={setSelectOption} />;
            case "ESCENARIO":
                return <><ButtonDiv style={{ width: "fit-content" }} onClick={() => { setSelectOption("INIT") }}>Pantalla inicial</ButtonDiv></>
            default:
                break;
        }
    }

    useEffect(() => {

    }, [selectOption])

    useEffect(() => {
        createOptions();
    }, [])

    return (
        <>

            <Element params={props.params}>
                <Wrapper params={props.params}>
                    <div style={{ height: "75%" }}>
                        <Day> {chapter + " - Día " + day}</Day>
                        <DivPanel style={{ justifyContent: 'space-between' }}>
                            <div style={{ width: "92%" }}>
                                {options}
                            </div>
                            <div style={{ width: "92%" }}>
                                <ButtonDiv tag="DORMIR" onClick={() => { addDay(); }}>Dormir</ButtonDiv>
                            </div>
                        </DivPanel>
                    </div>
                    <div style={{ height: "75%", marginTop: "9vh", marginLeft: "5vh", flex: 3 }}>
                        {createPanel()}
                    </div>
                    <div style={{ flex: 1, marginTop: "9vh", marginLeft: "5vh" }}>
                        <div>
                            IMAGEN ARON
                        </div>
                    </div>
                </Wrapper>
                <ModalMessage
                    isShown={modal}
                    setIsShown={setModal}
                    title={"Usar objectos"}
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
                    ¿Estas seguro que quieres irte a dormir?
                    <div>
                        <ButtonDiv></ButtonDiv>
                        <ButtonDiv></ButtonDiv>
                    </div>
                </ModalMessage>
            </Element>
        </>
    );

}
export default PanelGame;

