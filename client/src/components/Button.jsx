import React from "react";
import styled, { css } from "styled-components";

const ButtonFrame = ({ children, ...restProps }) => {
  return <StButton {...restProps}>{children}</StButton>;
};

const Button = (props) => {
  return (
    <ButtonFrame
    {...props}
    color={props.color || "white"}
    bc={props.bc || "#F50000"}
    hoverbc={props.hoverbc || "#770000"}
    hovercolor={props.hovercolor || "white"}
    />
  );
};

export default Button;

const StButton = styled.button`
  background-color: ${({ bc }) => bc};
  border-radius: 10px;
  color: ${({ color }) => color};
  border: none;
  cursor: pointer;
  margin: 5px;
  font-weight: 900;

  :hover {
    background-color: ${({ hoverbc }) => hoverbc};
    color: ${({ hovercolor }) => hovercolor};
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 220px;
          height: 58px;
          font-size: 14px;
        `;
      case "medium":
        return css`
          width: 118px;
          height: 46px;
          font-size: 14px;
        `;
      case "custom":
        return css`
          width: 220px;
          height: 58px;
          font-size: 14px;
          background-color: gray;
        `;

      default:
        return css`
          width: 77px;
          height: 30px;
          font-size: 14px;
        `;
    }
  }}
`;
