import React from "react";
import styled from "styled-components";

const GridStyle = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || "10px"};
  width: ${props => (props.width ? props.width : "100%")};
  margin: 10px auto;
  grid-template-columns: ${props =>
    props.min
      ? `repeat(auto-fill, minmax(${props.min}, 1fr))`
      : `repeat(auto-fill, minmax(200px, 1fr))`};
  ${props => (props.bg ? `background:${props.bg}` : "white")}
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
`;
const Grid = props => {
  return <GridStyle {...props}>{props.children}</GridStyle>;
};

export default Grid;
