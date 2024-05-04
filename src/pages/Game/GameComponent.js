import React from 'react';

import GameSurvival from './mode/survival/GameSurvival';
import GameDialogue from './mode/dialogue/GameDialogue';
import InitCharacter from './mode/initCharacter/initCharacter';
import GameCombat from './mode/combat/GameCombat';
import WaitStatus from './mode/combat/WaitStatus/WaitStatus';

const GameComponent = (props) => {
    return (
        <>
            {props.state === "SURVIVAL" ?
                <GameSurvival dataGame = {props.dataGame}/> :
             props.state === "DIALOGUE" ?
                <GameDialogue dataGame = {props.dataGame}/> :
            props.state === "COMBAT" ?
                <GameCombat dataGame = {props.dataGame}/> :
             props.state === "INITCHARACTER" ?
                <InitCharacter /> : <WaitStatus state = {props.state}/>
            }
        </>

    );
}

export default GameComponent;