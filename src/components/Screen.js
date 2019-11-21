import React from 'react';
import styled from 'styled-components';

function Screen() {
  return (
    <div>
      <Input type='text' />
    </div>
  );
}

export default Screen;

const Input = styled.input`
  width: 345px;
  height: 50px;
  text-align: right;
  font-size: 28px;
  margin-left: 10px;
  margin-right: 10px;
`;
