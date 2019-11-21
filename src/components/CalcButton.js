import React from 'react';
import styled from 'styled-components';

function CalcButton() {
  return (
    <CButtonDiv>
      <CButton style={{ background: 'yellow' }}>test</CButton>
    </CButtonDiv>
  );
}

export default CalcButton;

const CButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

const CButton = styled.button`
  height: 75px;
  width: 75px;
  /* display: inline-block; */
`;
