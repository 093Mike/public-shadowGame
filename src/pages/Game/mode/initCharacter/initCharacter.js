import React from 'react';
import MutableComponent from '../../../../composer/MutableComponent';
const InitCharacter = (props) => {

    const layoutDialogue = {
        "PORTRAIT": [
            ["header", { position: "5/60/15/90" }],
            ["initCharacter", { position: "20/5/90/91" }],
        ],
        "LANDSCAPE": [
            ["header", { position: "5/60/15/90" }],
            ["initCharacter", { position: "20/5/90/91" }],
        ]

    };

    return(
        <MutableComponent
            display={layoutDialogue}
        />
    )
}
export default InitCharacter;