import styled from "styled-components";
import { nanoid } from 'nanoid'

const Element = styled.div`
  grid-area: ${(props) => props.params.position};
  display: ${(props) => props.params.disable ? "none" : "grid"};
  text-align: center;
  align-items: center;
  pointer-events: all;
  transition: 1s all;

  @keyframes highligthedAnim {
    0%   {
      box-shadow: 0px 0px 30px 15px white;
    }
    100% {
      box-shadow: 0px 0px 20px 5px gray;
    }
  }

  ${(props) => props?.params?.styles || ""};
`;

Element.defaultProps={
  key: nanoid(),
}


export default Element;