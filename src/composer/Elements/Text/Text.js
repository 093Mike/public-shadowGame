import React from "react";
import styled from "styled-components";
import Element from "../Element.js";

const Wrapper = styled.pre`
${props => `
    text-align : left;
    color: white;
    font-size: 3vh;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props.params.styles}
`}`;

const Text = (props) => {
    return (
        <Element params={props.params}>
            <Wrapper params={props.params}>{props.params.text}</Wrapper>
        </Element>
    );

}
export default Text;