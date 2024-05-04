import React from "react";

import Composer from "./Composer";
import useOrientationCompile from "./Orientation";

const MutableComponent = (props) => {

    let width = useOrientationCompile() ? 100 : 50;
    let height = 100;
    const columns = (size) => {
        let res = "";
        for (let i = 1; i < size; i++) {
            res += "1fr ";
        }
        return res;
    };

    let Wrapper = {
        height: '100vh',
        width: '100vw',
        display: 'grid',
        position: 'absolute',
        gridTemplateColumns: columns(width),
        gridTemplateRows: columns(height),
        zIndex: '-1',
        overflow: 'hidden',
    }

    const loadElements = (props) => {
        let views = [];
        let orientation = width === 100 ? "LANDSCAPE" : "PORTRAIT";
        //console.log(props?.[orientation]);
        //console.log(props[orientation]);
        props[orientation].forEach(([type, params]) => {
            if (!params?.disable) {
                views.push(Composer.add(type, params));
            }
        });
        return views;
    };

    return (
        <div style={Wrapper} id="mutable">
            {loadElements(props.display)}
        </div>
    );

};


export default MutableComponent;