import styled from "styled-components";
import { nanoid } from "nanoid";

import { RxCross1 } from "react-icons/rx";

const Modal = styled.div`
  ${props =>`
    display: ${props.isOpen ? "flex" : "none"};
    position:absolute;
    z-index:999;
    background: transparent;
    text-align: center;
    padding: 0;
    border: 0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  `
}`

const Background = styled.div`
  ${(props) => `
    background: ${props.background ? "rgba(0, 0, 0, 0.5)" : "transparent"};
    width:100%;
    height:100%;
    display: grid;
    ${props.active ? "width: min-content; height: min-content;" : ""}
  `}
`;

const Wrapper = styled.div`
  ${(props) => `
    background: white;
    display: flex;
    flex-direction: column;
    margin: auto;
    min-height: 20vh;
    min-width: 50vh;
    max-width: 90vw;
    border-radius:2vh;
    overflow: ${props.overFlow ? "auto" : "none"};
    @media (max-width: 426px) {
      min-width: 30vw;
      height:auto;
      ${props?.media}
    }
    @media (min-width: 426px) and (pointer: coarse) {
      min-width: 70vw;
      max-width: 90vw;
      height:auto;
    }
    ${props?.boxSize}
  `}
`;

const Header = styled.div`
  ${(props) => `
    display: ${props.header ? "flex" : "none"};
    padding: 1.5vh 2vh;
    background-color: red;
    color:white;
    border-radius:2vh;
    border-bottom-left-radius: 0vh;
    border-bottom-right-radius: 0vh;
    @media (max-width: 426px) {
      font-size:1.1rem;
    }
    @media (min-width: 426px) and (pointer: coarse) {
      font-size:1.3rem;
    }
    > div:first-child {
      flex: 1;
      text-align: left;
    }
    ${props.isInstructor ? "width:min-content; height:min-content;" : ""}
    ${props?.styleHeader}
  `}
`;

const HeaderWrapper = styled.div`
  ${props =>`
  display: ${props.notActive ? "none" : "flex"}
  `}
`

const Main = styled.div`
  ${(props) => `
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 70vh;
    background: rgba(216, 216, 216, 0.6);
    border-radius:2vh;
    border-top-left-radius: ${props.header ? "0vh" : "2vh"};
    border-top-right-radius: ${props.header ? "0vh" : "2vh"};
    @media (max-width: 426px) {
      height: auto;
    }
    @media (min-width: 426px) and (pointer: coarse) {
      height: auto;
    }
    ${props?.styleMain}
  `}
`;

const Close = {
  
    height:"2vh",
    cursor:"pointer",
    margin: "auto",
  }


const TitleWrapper = styled.div`
  ${props => `
    ${props.styles}
  `}
`

function ModalMessage(props) {
  const setVisibility = (val) => {
    props.setIsShown(val);
    props.action()
  };

  return (
    <Modal isOpen={props.isShown} isChat={props.isChat} position={props.position}>
      <Background background={props.background} >
        <Wrapper boxSize={props?.boxSize} media={props?.media} Wrapper={props.overFlow}>
          <Header header={props.header} styleHeader = {props?.styleHeader}>
            <TitleWrapper styles={props?.titleStyle} >{props.title}</TitleWrapper>
            <HeaderWrapper notActive={props.disableCloseButton} onClick={() => setVisibility(false)}>
              <RxCross1 style={Close}/>
            </HeaderWrapper>
          </Header>
          <Main header={props.header} styleMain={props?.styleMain} >{props.children}</Main>
        </Wrapper>
      </Background>
    </Modal>
  );
}

ModalMessage.defaultProps = {
  key: nanoid(),
  background: true,
  header: true,
  overFlow : false,
  action : ()=>{}
};

export default ModalMessage;