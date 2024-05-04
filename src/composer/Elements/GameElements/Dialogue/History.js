import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divider } from "@react-md/divider";

import Element from "../../Element";
import ModalMessage from "../../../ModalMessage";


const ButtonDiv = styled.div`
${props => `
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
cursor: ${props.waitSelects ? "pointer" : "default"};
margin-top:1vh;
opacity: ${props.waitSelects ? 1 : 0};
transition: opacity 1s linear;
&:hover{
    background-color: #b50000;;
}
@media (max-width: 426px) {
    font-size:1.5rem;
}
`}`;


const History = (props) => {
    const [modal, setModal] = useState(false);


    const getHistory = () => {
        let views = [];
        props.params?.history.forEach((element, index) => {
        views.push(
            <div key={`dialogue-${index}`} dangerouslySetInnerHTML={{ __html: element }} />
        );
        views.push(<Divider key={`divider-${index}`} style={{ width: "100%" }} />);
    
        });
        return views;
    }

    useEffect(()=>{
        if(!props.params.waitSelects){
            setModal(false);
        }
    },[props.params.waitSelects])

    useEffect(()=>{
        if(modal){
            getHistory();
        }
    },[modal])

    return (
        <>
            <Element params={props.params}>
                <ButtonDiv waitSelects={props.params.waitSelects} onClick={()=>{if(props.params.waitSelects)setModal(true)}}>Ver historico</ButtonDiv>
            </Element>
            <ModalMessage
                    isShown={modal}
                    setIsShown={setModal}
                    title={"Historico"}
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
                    {getHistory()}
                </ModalMessage>
        </>
    );
};
export default History;