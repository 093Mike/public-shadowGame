import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Element from "../../Element";
import Stats from "../Survival/Stats/Stats";
import ModalMessage from "../../../ModalMessage";
import AppStateContext from "../../../../appState/AppStateContext";
import combatActions from "../../../../assets/game/combat/combatActions";
import { Divider } from "@react-md/divider";
import { FaZ } from "react-icons/fa6";


const Wrapper = styled.div`
${props => `
  background-size: cover;
  display: flex;
  align-items:center;
  justify-content:left;
  max-width: 100%;
  max-height: 100%;
  height:${props.turn ? '100%' : "30%"};
  flex-direction:column;
  color: white;
  transition: 0.5s height;
  &>*{
      margin: 1vh 2vh;
  }
  @media (max-width: 426px) {
    flex-direction : column;
    overflow: auto;
    justify-content: normal;
}

`}`;

const DivPanel = styled.div`
    ${props => `
        background-color: ${props.state === "WIN" ? "rgba(92, 255, 0, 0.57);" :
            props.state === "GAMEOVER" ? "rgba(255, 0, 0, 0.57);" : "rgba(216, 216, 216, 0.5);"}
        border-radius: 8px;
        display: flex;
        width : 100%;
        height:100%;
        max-width: 100%;
        max-height: 100%;
        flex-direction: row;
        padding: 2vh;
        grid-gap: 1em;
        align-items: center;
        transition:1s background-color;
    `}
`


const PRound = styled.p`
    ${props => `
        text-align:left;
        font-family: UniversalIgnorance;
        font-size: 1.5em;
        width:100%;
    `}
`


const ButtonDiv = styled.div`
${props => `
text-align: center;
border-radius: 0.7vh;
color: white;
background-color: ${props.action ? props?.special ? "goldenrod" : "red" : "grey" };
font-size: 3vh;
padding: 1vh;
height: fit-content;
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

const PanelCombat = (props) => {

    const [state, setState] = useState("INIT");
    const [modal, setModal] = useState(false);

    const appState = React.useContext(AppStateContext);
    const poder = appState.state.get("getPoder");
    const stats = appState.characters.get(appState.state.get("getPrimarycharacter"));

    const selectedAttack = (key) => {
        if(stats.MP > combatActions?.[poder].ATK?.[key].MP){
            props.params.attackCharacter(key, false); setModal(false);
        }
    }

    const getAttacks = () => {
        let views = [];
        if (poder !== undefined) {
            for (const key in combatActions?.[poder].ATK) {
                let atk = combatActions?.[poder].ATK?.[key];
                let actionOK = stats?.MP >= atk.MP;
                views.push(
                    <>
                        <ButtonDiv action = {actionOK} special = {atk?.special} onClick={() => { selectedAttack(key) }}>
                            {atk.name}
                        </ButtonDiv>
                        <div>Usarás {atk.MP} MP {atk?.HP !== undefined ? <>| <b>Te quita {atk.HP} HP</b></> : <></> }</div>
                        <Divider style={{width:"100%"}}/>
                    </>

                )
            };
        }
        return views;
    }

    useEffect(() => { getAttacks() }, [appState])

    return (
        <>
            <Element params={props.params}>
                <Wrapper params={props.params} turn={props.params.turn} >
                    <PRound>RONDA {props.params.round} - {props.params.turn ? "TU TURNO" : "TURNO DEL ENEMIGO"}</PRound>
                    <DivPanel turn={props.params.turn} state={props.params.state}>
                        {
                            props.params.turn ?
                                <>
                                    <div>
                                        <ButtonDiv action = {true} onClick={() => { setModal(true) }}>ATAQUE</ButtonDiv>
                                        <ButtonDiv action = {true} onClick={() => { props.params.defAction(false) }}>DEFENSA</ButtonDiv>
                                        <ButtonDiv action = {true}>USAR OBJECTO</ButtonDiv>
                                        <ButtonDiv action = {true}>HUIR</ButtonDiv>
                                    </div>
                                    <div style={{ flex: 1, marginLeft: "1em" }}>
                                        {state === "INIT" ?
                                            <Stats combat={true} />
                                            : <></>
                                        }
                                    </div>
                                </>
                                :
                                <>
                                    <h1 style={{ textAlign: "center", flex: 1 }}>{props.params.message}</h1>
                                </>
                        }

                    </DivPanel>
                </Wrapper>
            </Element>
            <ModalMessage
                isShown={modal}
                setIsShown={setModal}
                title={"Ataques"}
                titleStyle={`font-size:2.1vh; margin-left:3vh;`}
                boxSize={`
                width: 40rem;
                background-color: rgba(216,216,216,1);
                `}
                styleMain={`
                border-bottom-left-radius:1vh;
                border-bottom-right-radius:1vh;
                height: 50vh !important;
                display: flex;
                text-align: justify !important;
                flex-direction:column;
                font-size: 1.5rem;
                padding: 1vw;
                `}
            >
                {getAttacks()}
            </ModalMessage>
        </>
    );
}
export default PanelCombat