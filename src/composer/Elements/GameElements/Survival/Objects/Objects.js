import React, { useState } from "react";
import styled from "styled-components";
import { TiInfoLarge } from "react-icons/ti";
import { Tooltip } from 'react-tooltip'
import objectsList from "../../../../../assets/game/objects/objects";
import ModalMessage from "../../../../ModalMessage";
import 'react-tooltip/dist/react-tooltip.css'
import AppStateContext from "../../../../../appState/AppStateContext";
import { nanoid } from "nanoid";

const Wrapper = styled.div`
    background-color: rgba(216, 216, 216, 0.5);
    border-radius: 8px;
    display: grid;
    width : 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    padding: 0;
    flex: 1;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(10, auto);
    overflow: auto;
`;

const Character = styled.p`
    color: white;
    font-size: 4vh;
    text-align:left;
    margin: 0vh
`;

const ObjectDiv = styled.div`
${props => `
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 0.2s ease 0s;
background-color : ${props.selected ? "wheat" : ""};

${props.activeHover ?
            `
    border: 1px solid black;
    &:hover{
        background-color: red};
    }
    ` : ''}
`}`;

const ObjectItem = styled.div`
font-size:4vh;
`;

const ObjectDescription = styled.p`
${props => `
    font-size:1.5vh;
    ${!props.activeHover ?
            `display:none;` : ``}
`}`;

const Objects = (props) => {
    const [modal, setModal] = useState(false);
    const appState = React.useContext(AppStateContext);
    let FOOD = appState.objects.get("getFood");

    const handleObjectClick = (objectId) => {
        if (props.objectsKey.has(objectId)) {
          const newSelectedObjects = new Map(props.objectsKey);
          const count = newSelectedObjects.get(objectId);
          if (count === 1) {
            newSelectedObjects.delete(objectId); 
          } else {
            newSelectedObjects.set(objectId, count - 1); 
          }
          props.setObjectsKey(newSelectedObjects);
        } else {
          props.setObjectsKey(new Map(props.objectsKey.set(objectId, 1)));
        }
      };


    const getObjects = () => {
        if (FOOD !== null) {
            let views = [];
            Object.entries(FOOD).forEach(([key, value]) => {
                for (let i = 0; i < value; i++) {
                    views.push(
                        <>
                            <ObjectDiv activeHover={props.activeHover} selected = {props?.objectsKey?.has(key + "_" + i)}
                                data-tooltip-id={key + "_" + i}
                                onClick={()=>{if(props.activeHover) handleObjectClick(key + "_" + i)}}
                            >
                                <ObjectItem>{objectsList.FOOD[key].icon}</ObjectItem>
                                <ObjectDescription activeHover={props.activeHover}>{objectsList.FOOD[key].text}</ObjectDescription>
                            </ObjectDiv>
                            <Tooltip id={key + "_" + i} >
                                {props.activeHover ? 
                                    objectsList.FOOD[key]?.hungry !== undefined ? "Hambre: -" +  objectsList.FOOD[key]?.hungry :
                                    objectsList.FOOD[key]?.thirsty !== undefined ? "Sed: -" +  objectsList.FOOD[key]?.thirsty : ""
                                : 
                                objectsList.FOOD[key].text}
                            </Tooltip>

                        </>
                    );

                }
            });
            return views;
        }

    }

    return (
        <>
            <Character>Objectos:<TiInfoLarge onClick={() => { setModal(true) }} style={!props.activeHover ? { display: "none" } : {}} /></Character>
            <Wrapper params={props.params}>
                {getObjects()}
            </Wrapper>
            <Tooltip id="my-tooltip" />

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
                Selecciona todos los objetos que quieras utilizar para cuando te vayas a dormir. Los objetos seleccionados desaparecerán una vez dormidos y obtendrán todos los efectos pertinentes.
            </ModalMessage>
        </>
    );

}
export default Objects;