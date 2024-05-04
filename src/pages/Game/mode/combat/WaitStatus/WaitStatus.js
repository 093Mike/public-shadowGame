import React from 'react';
import AppStateContext from '../../../../../appState/AppStateContext';
import MutableComponent from '../../../../../composer/MutableComponent';
import Firebase from '../../../../../FirebaseEngine/firebase';

const WaitStatus = (props) => {

    const appState = React.useContext(AppStateContext);
    const progress = appState.state.get("progressDay");
    let f = new Firebase();

    const layoutSurvival = {
        "PORTRAIT": [
            ["header" , {position: "5/5/15/45"}],
            ["text", { position: "50/10/55/40", text: "CARGANDO...", styles:"font-family: Segoe UI; text-align:center; background-color: white; color: black; border-radius: 8px;"}],
        ],
        "LANDSCAPE": [
            ["header", { position: "5/60/15/90" }],
            ["text", { position: "50/40/55/60", text: "CARGANDO...", styles:"font-family: Segoe UI; text-align:center; background-color: white; color: black; border-radius: 8px;"}],
        ]

    };
    return(
        <MutableComponent
            display={layoutSurvival}
        />
    )
}

export default WaitStatus;