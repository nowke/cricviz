import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.span`
  position: relative;
  display: block;
  background: transparent;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #2d3436;
  margin-left: 20px;
  margin-right: 20px;
  color: #2d3436;
  font-size: 1.5em;
  transform-origin: center center;
  left: ${props => {
    console.log(props.width);
    const left =
      ((props.value - props.min) * (props.width - 145)) /
      (props.max - props.min);
    return `${left}px`;
  }};

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    border: 0.4em solid transparent;
    position: absolute;
    left: 41%;
    bottom: -20px;
    border-top: 10px solid #2d3436;
  }
`;

const Input = styled.input`
  width: calc(100% - 20px);
  margin: 30px 10px;
  -webkit-appearance: none;

  &::before {
    content: "1971";
    width: 40px;
    display: inline-block;
    margin: 0 10px;
    font-size: 20px;
    color: #2d3436;
  }

  &::after {
    content: "2019";
    width: 40px;
    display: inline-block;
    margin: 0 10px;
    font-size: 20px;
    color: #2d3436;
  }

  &::-webkit-slider-runnable-track {
    cursor: pointer;
    width: 100%;
    height: 2px;
    box-shadow: none;
    background: #2d3436;
    border-radius: 0px;
  }
  &::-moz-range-track {
    cursor: pointer;
    width: 100%;
    height: 2px;
    box-shadow: none;
    background: #2d3436;
    border-radius: 0px;
  }

  &::-webkit-slider-thumb {
    box-shadow: none;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    height: 24px;
    width: 36px;
    margin-top: -12px;
    border-radius: 24px;
    background: rgba(0, 0, 0, 1);
    cursor: pointer;
    -webkit-appearance: none;
  }
  &::-moz-range-thumb {
    box-shadow: none;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    height: 24px;
    width: 36px;
    border-radius: 24px;
    background: rgba(0, 0, 0, 1);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -12px;
  }

  &:focus {
    outline: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }
`;

function Slider({ value, width, onChange, inputRef }) {
  return (
    <div>
      <Label min={1971} max={2019} value={value} width={width}>
        {value}
      </Label>
      <div style={{ width: "100%" }}>
        <Input
          type="range"
          ref={inputRef}
          value={value}
          min={1971}
          max={2019}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Slider;
