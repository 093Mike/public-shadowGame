import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import Element from "../../Element.js";
import ModalMessage from '../../../ModalMessage.js';

const Wrapper = styled.div`
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



const Credits = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Element params={props.params}>
        <Wrapper params={props.params} onClick={(e) => setModal(true)}>Creditos</Wrapper>
      </Element>
      <ModalMessage
        isShown={modal}
        setIsShown={setModal}
        title={"Creditos"}
        titleStyle={`font-size:2.1vh; margin-left:3vh;`}
        boxSize={`
          width: 40rem;
          background-color: rgba(216,216,216,1);
        `}
        styleMain={`
          border-bottom-left-radius:1vh;
          border-bottom-right-radius:1vh;
          height: 30vh !important;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction:column;
          font-size: 1.5rem;
          padding: 1vw;
        `}

      >

      </ModalMessage>
    </>

  );
}
export default Credits;

