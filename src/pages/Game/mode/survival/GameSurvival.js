import React from 'react';
import MutableComponent from '../../../../composer/MutableComponent';
const GameSurvival = (props) => {

    const layoutSurvival = {
        "PORTRAIT": [
            ["header", { position: "5/60/15/90" }],
            ["panelGame", { position: "5/5/95/90", options: props.dataGame.OPTIONS}],
        ],
        "LANDSCAPE": [
            ["header", { position: "5/60/15/90" }],
            ["panelGame", { position: "5/5/95/90", options: props.dataGame.OPTIONS}],
        ]

    };
    return(
        <MutableComponent
            display={layoutSurvival}
        />
    )
}
export default GameSurvival;
