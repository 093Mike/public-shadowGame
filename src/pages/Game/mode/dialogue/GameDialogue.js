import React, { useState } from 'react';
import MutableComponent from '../../../../composer/MutableComponent';
const GameDialogue = (props) => {

    const [history, setHistory] = useState ([]);
    const [waitSelects, setWaitSelects] = useState(null);

    const layoutDialogue = {
        "PORTRAIT": [
            ["header", { position: "5/60/15/90" }],
            ["dialogue", { position: "1/1/99/95", dialogue: props.dataGame.DIALOGUE, setHistory: setHistory,
                waitSelects: waitSelects, setWaitSelects: setWaitSelects
            }],
            ["history", { position: "5/40/15/55", history:history }],
        ],
        "LANDSCAPE": [
            ["header", { position: "5/60/15/90" }],
            ["dialogue", { position: "1/1/99/95", dialogue: props.dataGame.DIALOGUE, setHistory: setHistory,
                waitSelects: waitSelects, setWaitSelects: setWaitSelects
            }],
            ["history", { position: "5/40/15/55", history:history, waitSelects: waitSelects}],

        ]
    };

    /*useEffect(()=>{
        console.log(history);
    },[history])*/

    return(
        <MutableComponent
            display={layoutDialogue}
        />
    )
}
export default GameDialogue;
