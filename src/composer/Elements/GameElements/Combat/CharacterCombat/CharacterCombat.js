import React from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

import Element from "../../../Element";
import img1 from "../../../../../assets/img/test1.png";
import img2 from "../../../../../assets/img/test2.png";
import AppStateContext from "../../../../../appState/AppStateContext";

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
  flex-direction : column;
    opacity: ${props.enemy ? (props.state === "WIN" ? "0" : "1") : (props.state === "GAMEOVER" ? "0" : "1")};
    transition: 1s opacity; 
  &>*{
      margin: 1vh 2vh;
  }
  @media (max-width: 426px) {
    overflow: auto;
    justify-content: normal;
}
${props.params.styles}

`}`;

const DivPanel = styled.div`
    ${props => `
        background-color: ${props.turn ? "rgba(216, 216, 216, 0.8)" : "rgba(216, 216, 216, 0.5)"};
        border-radius: 8px;
        display: flex;
        width : 100%;
        max-width: 100%;
        flex:1;
        flex-direction: column ;
        padding: 2vh;
        grid-gap: 1em;
        color:white;
        transition: 1s background-color; 

    `}
`

const ImgPanel = styled.img`
    ${props => `
        flex: 3;
        transform: ${!props.enemy ? "scaleX(-1)" : "" };
        
    `}
`


const PCharacter = styled.div`
    ${props => `
        font-family: UniversalIgnorance;
        font-size: 1.3em;
        width:100%;
    `}
`

const CharacterCombat = (props) => {

    const appState = React.useContext(AppStateContext);

    return (
    <Element params={props.params}>
        <Wrapper params={props.params} state={props.params.state} enemy={props.params.enemy}>
            <DivPanel turn={props.params.turn}>
                <PCharacter>{!(props.params.enemy) ? appState.state.get("getName")?.toUpperCase() : "ENEMIGO" }</PCharacter>
                <ProgressBar id={props.params.enemy ? "progressIDEnemy" : "progressIDCharacter"} bgColor={"red"}  baseBgColor={"black"}
                            completed={""+props.params?.stats?.HP.toFixed(2)} maxCompleted={props.params?.stats?.statsMax?.HP} />
                <ProgressBar id={props.params.enemy ? "progressIDEnemy" : "progressIDCharacter"} bgColor={"blue"}  baseBgColor={"black"}
                            completed={""+props.params?.stats?.MP.toFixed(0)} maxCompleted={props.params?.stats?.statsMax?.MP} />
            </DivPanel>
            <ImgPanel enemy={props.params.enemy} src={props.params.enemy ? img2 :img1} />
        </Wrapper>
    </Element>
    );
}
export default CharacterCombat