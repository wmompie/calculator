import React, { useState } from 'react';
import CalcButton from './CalcButton';
import styled from 'styled-components';

function ButtonGroup() {
  const [calcButton, setCalcButton] = useState([
    {
      id: 96,
      text: `0`,
      width: `165px`,
    },
    {
      id: 110,
      text: `.`,
      width: `75px`,
    },
    {
      id: 107,
      text: `+`,
      width: `75px`,
    },
    {
      id: 97,
      text: `1`,
      width: `75px`,
    },
    {
      id: 98,
      text: `2`,
      width: `75px`,
    },
    {
      id: 99,
      text: `3`,
      width: `75px`,
    },
    {
      id: 109,
      text: `-`,
      width: `75px`,
    },
    {
      id: 100,
      text: `4`,
      width: `75px`,
    },
    {
      id: 101,
      text: `5`,
      width: `75px`,
    },
    {
      id: 102,
      text: `6`,
      width: `75px`,
    },
    {
      id: 106,
      text: `*`,
      width: `75px`,
    },
    {
      id: 103,
      text: `7`,
      width: `75px`,
    },
    {
      id: 104,
      text: `8`,
      width: `75px`,
    },
    {
      id: 105,
      text: `9`,
      width: `75px`,
    },
    {
      id: 111,
      text: `/`,
      width: `75px`,
    },
  ]);
  return (
    <Buttons>
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcButton />
    </Buttons>
  );
}

export default ButtonGroup;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin: 20px 10px;
  grid-gap: 10px;
`;
