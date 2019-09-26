import React from "react";
import styled from "styled-components";

const Style = styled.div`
  width: ${props => (props.width ? props.width : "12em")};
  min-height: ${props => (props.height ? props.height : "9em")};
  display: ${props => (props.block ? "flex" : "inline-flex")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  margin: ${props => (props.margin ? props.margin : "5px auto")};
  border-radius: ${props => (props.radius ? props.radius : "2px")};
  color: ${props => (props.color ? props.color : "black")};
  background: ${props => (props.bg ? props.bg : "white")};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25), -2px -2px 2px rgba(0, 0, 0, 0.25);
  & > img {
    /* max-width: 50%; */
    /* max-height: 50%; */
  }
`;
const Card = props => {
  return (
    <Style {...props}>
      <h2>{props.title}</h2>
      {props.img && <img src={props.img} alt={props.title} />}
      <p>{props.text}</p>
    </Style>
  );
};

export default Card;
