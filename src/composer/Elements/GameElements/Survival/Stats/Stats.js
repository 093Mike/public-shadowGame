import React from "react";
import styled from "styled-components";
import AppStateContext from "../../../../../appState/AppStateContext";
import {
    GiHealthNormal, GiDeadlyStrike, GiWaterBottle,
    GiMeal, GiCheckedShield, GiWeightLiftingUp,
    GiRunningNinja, GiShamrock
} from "react-icons/gi";

const Wrapper = styled.div`
${props => `
    background-color: ${props?.combat ? "transparent" :"rgba(216, 216, 216, 0.5)"} ;
    border-radius: 8px;
    display: grid;
    width : 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    grid-gap: 1em;
    padding: 0;
    flex: 1;
    grid-template-columns: repeat(4, auto);
    overflow: auto;
`}`;

const Stats = (props) => {
    const appState = React.useContext(AppStateContext);
    let primaryCharacter = appState.state.get("getPrimarycharacter");
    let statsCharacter = appState.characters.get(primaryCharacter);

    const descStats = (key) => {
        let TEMP_img = {
            agi: <GiRunningNinja style={{ fontSize: "3vw" }} />,
            atk: <GiWeightLiftingUp style={{ fontSize: "3vw" }} />,
            luk: <GiShamrock style={{ fontSize: "3vw" }} />,
            hungry: <GiMeal style={{ fontSize: "3vw" }} />,
            def: <GiCheckedShield style={{ fontSize: "3vw" }} />,
            thirsty: <GiWaterBottle style={{ fontSize: "3vw" }} />,
            MP: <GiDeadlyStrike style={{ fontSize: "3vw" }} />,
            HP: <GiHealthNormal style={{ fontSize: "3vw" }} />,
        }
        let TEMP_decp = {
            agi: "Agilidad",
            atk: "Ataque",
            luk: "Suerte",
            hungry: "Hambre",
            def: "Defensa",
            thirsty: "Sed",
            MP: "Poder",
            HP: "Vida",
        }
        return (
            <>
                <div>
                    {TEMP_img?.[key]}
                </div>
                <div>
                    {TEMP_decp?.[key]}
                </div>
            </>

        )


    }


    const getStats = () => {
        let views = [];
        if (statsCharacter !== undefined && statsCharacter !== null) {
            Object.entries(statsCharacter)?.forEach(([key, value]) => {
                if (props?.combat) {
                    if (key !== "HP" && key !== "MP") {
                        if (key !== "statsMax" && key !== "nvl" && key !== "expnvl") {
                            if (key === "hungry" || key === "thirsty") {
                                views.push(<div>{descStats(key)}{value} / <b>{statsCharacter.statsMax[key]}</b></div>)
                            } else {
                                views.push(<div>{descStats(key)}{value}</div>)
                            }
                        }
                    }
                } else {
                    if (key !== "statsMax" && key !== "nvl" && key !== "expnvl") {
                        if (key === "hungry" || key === "thirsty") {
                            views.push(<div>{descStats(key)}{value} / <b>{statsCharacter.statsMax[key]}</b></div>)
                        } else {
                            views.push(<div>{descStats(key)}{value}</div>)
                        }
                    }
                }
            });
        }
        return views;
    }


    return (
        <Wrapper params={props.params} combat={props?.combat}>
            {getStats()}
        </Wrapper>
    );

}
export default Stats;