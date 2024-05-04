import React from 'react';
import styled from "styled-components";
import { Divider } from "@react-md/divider";

import Stats from '../Stats/Stats.js';
import Objects from '../Objects/Objects.js';
import AppStateContext from '../../../../../appState/AppStateContext.js';


const DivPanel = styled.div`
    ${props => `
        background-color: rgba(216, 216, 216, 0.5);
        border-radius: 8px;
        display: flex;
        width : 100%;
        height:100%;
        max-width: 100%;
        max-height: 100%;
        flex-direction: column ;
        padding: 2vh;
        grid-gap: 1em;
    `}
`

const Character = styled.p`
    color: white;
    font-size: 4vh;
    text-align:left;
    margin: 0vh
`;

const PanelInit = (props) => {
    const appState = React.useContext(AppStateContext);
    let name = appState.state.get("getName");
    let primaryCharacter = appState.state.get("getPrimarycharacter");
    let statsCharacter = appState.characters.get(primaryCharacter);

return (
    <DivPanel>
        <Character>{name?.toUpperCase()} - Lv. {statsCharacter?.nvl} / {statsCharacter?.statsMax.nvl}</Character>
        <Divider style={{ width: "100%" }} />
        <div style={{ height: "inherit", display: "flex", flexDirection: "column" }}>
            <Stats params={props.params} />
            <Objects params={props.params} activeHover={false} objectsKey={props.objectsKey} />
        </div>
    </DivPanel>
);
}
export default PanelInit;