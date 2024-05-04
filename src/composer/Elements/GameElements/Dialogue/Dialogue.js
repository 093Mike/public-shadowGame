import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import AudioPlayer from 'react-h5-audio-player';

import actions from "../../../../assets/game/actions/actions";
import AppStateContext from "../../../../appState/AppStateContext";
import Element from "../../Element";
import Firebase from "../../../../FirebaseEngine/firebase";

import aron0 from "../../../../assets/img/character/aron/0.png"
import elisa0 from "../../../../assets/img/character/elisa/0.png"

const Wrapper = styled.div`
${props => `
    background-color: transparent;
    display: flex;
    width : 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    padding: 0;
    overflow: auto;
    flex-direction: row;
    justify-content: center;
    
    text-align: justify;
    align-content: center;
    align-items: center;
    `}`;

const Text = styled.div`
${props => `
    text-align : left;
    color: ${props.waitText ? "white" : "red"};
    font-size: 3vh;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: ${props.waitText ? 1 : 0};
    transition: opacity 2s linear, color 1s linear;
`}`;

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
cursor: pointer;
margin-top:1vh;
&:hover{
    background-color: #b50000;;
}
@media (max-width: 426px) {
    font-size:1.5rem;
}
`}`;

const DivSelects = styled.div`
${props => `
opacity: ${props.waitSelects ? 1 : 0};
transition: opacity 2s linear, color 2s linear;
`}`;

const DivImg = styled.img`
${props => `
    display: ${props.imageCha !== null ? "initial" : "none"};
    width:150px;
`}`;

const Dialogue = (props) => {

    const [musica, setMusica] = useState(null);
    const [tag, setTag] = useState(null);
    const [dataDialogue, setDataDialogue] = useState(null);
    const [imageCha, setImageCha] = useState(null);
    const [text, setText] = useState(null);
    const [waitText, setWaitText] = useState(false);
    const [selects, setSelects] = useState(null);
    const [status, setStatus] = useState(0);
    const temporizadorId = useRef(null);

    const appState = React.useContext(AppStateContext);
    const day = appState.state.get("dayChapter");
    const chapter = appState.state.get("numChapter");
    const progress = appState.state.get("progressDay");
    const name = appState.state.get("getName");


    let f = new Firebase();

    const loadJSModule = async () => {
        try {
            let TEMP_cap = chapter === "Prologo" ? 0 : chapter;
            let module = null;
            if (tag !== null) {
                module = await import(`../../../../assets/game/dialogues/${TEMP_cap}/${tag}`);
            } else if (appState.state.get("getTag") !== "") {
                if(appState.state.get("getTag") !== undefined ){
                    module = await import(`../../../../assets/game/dialogues/${TEMP_cap}/${appState.state.get("getTag")}`);
                }else{
                    module = await import(`../../../../assets/game/dialogues/${TEMP_cap}/${props.params.dialogue}`);
                }
            } else {
                module = await import(`../../../../assets/game/dialogues/${TEMP_cap}/${props.params.dialogue}`);
            }
            setDataDialogue(module.default);
        } catch (error) {
            console.error("Error al cargar el módulo JS: ", error);
            return null;
        }
    };

    const loadSrcPublic = async (path, tag) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.url;
            if (tag !== undefined) {
                if (tag === "IMG") {
                    document.getElementById("id_wrapper").style.backgroundImage = `url(${data})`;
                } else if (tag === "EFFECT") {
                    new Audio(data).play().catch("test");
                }
            } else {
                setMusica(data);
            }

        } catch (error) {
            console.error("Error al cargar el archivo de capítulo: ", error);
            return null;
        }
    }

    const loadImgCharacter = (img) => {
        const path = img.split("/");
        console.log(path);
        switch (path[0]) {
            case "aron":
                if (path[1] === "0") setImageCha(aron0);
                break;
            case "elisa":
                if(path[1]==="0") setImageCha(elisa0)
            default:
                break;
        }
    }


    const clickOpcion = (tag, text) => {
        if (props.params.waitSelects) {
            setTag(tag);
            f.addDataGameDecision({ lastDecision: tag }, chapter, day, progress);
            props.params.setHistory(history => [...history, `<i>Has decidido: ${text}</i>`]);
            setStatus((prevStatus) => prevStatus + 1);
        }
    }

    const getSelectOptions = () => {
        let views = [];
        selects?.forEach(element => {
            const hiddenTag = appState.decisions.get(`getTag/${element?.HIDDENTAG}`,);
            if (!hiddenTag)
                views.push(
                    <ButtonDiv onClick={() => { clickOpcion(element.TAG, element.TEXT) }}>
                        {element.TEXT}
                    </ButtonDiv>
                )
        });
        return views;
    }

    const changeName = (text) => {
        return text.replace("[nombre]", name);
    }

    const actionText = () => {
        let TEMP_name = changeName(dataDialogue[status]?.TEXT);
        setText(TEMP_name);
        document.getElementById("textDig").innerHTML = TEMP_name;
        setWaitText(true);
        if (TEMP_name.length > 0) {
            props.params.setHistory(history => [...history, TEMP_name]);
        }
    }

    const actionExecute = (action) => {
        const TEMP_FUN = actions[action[0]];
        TEMP_FUN(appState, action[1]);
    }

    const nextProgress = () => {
        setDataDialogue(null);
        f.addDataGame({ progress: progress + 1});
    }

    useEffect(() => {
        if (dataDialogue !== null) {
            if (dataDialogue[status]?.METHOD) {
                actionExecute(dataDialogue[status]?.METHOD);
            }
            switch (dataDialogue[status]?.ACTION) {
                case "PLAY":
                    loadSrcPublic(dataDialogue[status]?.MUSIC)
                    break;
                case "STOPPLAY":
                    setMusica("");
                    break;
                case "TEXT":
                    actionText();
                    break;
                case "DIALOGUE":
                    actionText();
                    loadImgCharacter(dataDialogue[status]?.IMAGE);
                    break;
                case "IMG":
                case "EFFECT":
                    loadSrcPublic(dataDialogue[status]?.IMAGE, dataDialogue[status]?.ACTION);
                    break;
                case "BACKGROUND":
                    document.getElementById("id_wrapper").style.background = dataDialogue[status]?.COLOR;
                    break;
                case "SELECT":
                    actionText();
                    setSelects(dataDialogue[status]?.LINKS);
                    props.params.setWaitSelects(true);
                    break;
                case "CHANGETAG":
                    setStatus(0);
                    loadJSModule();
                    break;
                case "WAIT":
                    setWaitText(false);
                    props.params.setWaitSelects(false);
                    break;
                case "NEXTPROGRESS":
                    break;
                default:
                    loadJSModule();
                    break;
            }


            if (dataDialogue[status]?.TEMP > 0) {
                temporizadorId.current = setTimeout(() => {
                    setStatus((prevStatus) => prevStatus + 1);
                    setSelects(null)
                }, dataDialogue[status].TEMP * 1000);
            }

            return () => {
                if (temporizadorId.current) {
                    clearTimeout(temporizadorId.current);
                }
            };
        }
    }, [status, dataDialogue]);

    useEffect(() => {
        if (selects !== undefined) getSelectOptions();
    }, [selects]);

    useEffect(()=>{
        loadJSModule();
    },[progress])

    useEffect(() => {
        loadJSModule();
    }, []);


    return (
        <Element params={props.params}>
            <Wrapper params={props.params} imageCha = {imageCha}>
                <DivImg src={imageCha} imageCha = {imageCha}/>
                <div>
                    <Text waitText={waitText} id="textDig"></Text>
                    <DivSelects waitSelects={props.params.waitSelects}>{getSelectOptions()}</DivSelects>
                </div>
                {dataDialogue !== null ? dataDialogue[status]?.ACTION === "NEXTPROGRESS" ? <ButtonDiv onClick={()=>nextProgress()}> Siguiente</ButtonDiv> : <></> : <></>}

                <AudioPlayer
                    autoPlay={true}
                    src={musica}
                    showSkipControls={false}
                    showJumpControls={false}
                    loop={true}
                    style={{ display: 'none' }}
                />
            </Wrapper>
        </Element>
    );

}
export default Dialogue;