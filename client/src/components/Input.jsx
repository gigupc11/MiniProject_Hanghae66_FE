import React from "react";
import styled, { css } from "styled-components";

const Input = (props) => {
  return <StInput {...props} />;
};

export default Input;

const StInput = styled.input`
  border-radius: 10px;
  font-weight: 600;
  padding: 15px;
  border: 1px solid black;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 459px;
          height: 53px;
          font-size: 20px;
        `;
      case "medium":
        return css`
          width: 326px;
          height: 46px;
          font-size: 16px;
        `;
      case "custom":
        return css`
          width: ${({ width }) => width};
          height: ${({ height }) => height};
          font-size: ${({ fsize }) => fsize};
          font-weight: ${({ fweight }) => fweight};
          padding: ${({ padding }) => padding}; ;
        `;

      default:
        return css`
          width: 270px;
          height: 30px;
          font-size: 14px;
        `;
    }
  }}
`;
