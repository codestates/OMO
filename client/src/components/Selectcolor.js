import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const SelectColorContainer = styled.div`

`;

export const SelectColorBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  background-color: rgba(0,0,0,0.4);
  display: grid;

`;
export const SelectColorOpenBtn = styled.button`
  margin: 1em;
  height: 2em;
  width: 2em;
  background: ${props => props.background};
  border-style: none;
  border-radius: 50%;
`;

export const SelectColorBox = styled.div`
display: flex;
flex-flow: wrap;
height: 6em;
width: 10em;
margin: 0px;
border-style: none;
border: 1px solid blue;
background-color: whitesmoke;
margin: 0px;

`;
export const SelectColorBtn = styled.button`
  margin: 1em;
  height: 2em;
  width: 2em;
  border-style: none;
  background-color: ${props => props.theme.main};
  border-radius: 50%;
  `;

SelectColorOpenBtn.defaultProps = {
  theme: {
    main: '#1A1A1A'
  }
};
SelectColorBtn.defaultProps = {
  theme: {
    main: '#1A1A1A'
  }
};

// 색깔 지정방식을 뒤집어서 적용해야함
const red = {
  main: '#DA0063'
};
const yellow = {
  main: '#FAC710'
};
const green = {
  main: '#0CA789'
};
const blue = {
  main: '#2D9BF0'
};
const deepblue = {
  main: '#414BB2'
};

export const Selectcolor = () => {
  const [selectColor, setSelectColor] = useState('#1A1A1A');
  const [isOpen, setIsOpen] = useState(false);

  const selectColorHandler = (e) => {
    console.log(selectColor);
    setSelectColor(e.target.value);
    setIsOpen(!isOpen);
  };

  return (
    <SelectColorContainer>
      <SelectColorOpenBtn onClick={selectColorHandler} background={selectColor} />
      {isOpen === true
        ? <SelectColorBackdrop onClick={selectColorHandler}>
          <SelectColorBox>
            <SelectColorBtn value='#1A1A1A' onClick={selectColorHandler} />
            <ThemeProvider theme={red}>
              <SelectColorBtn value='#DA0063' onClick={selectColorHandler} />
            </ThemeProvider>
            <ThemeProvider theme={yellow}>
              <SelectColorBtn value='#FAC710' onClick={selectColorHandler} />
            </ThemeProvider>
            <ThemeProvider theme={green}>
              <SelectColorBtn value='#0CA789' onClick={selectColorHandler} />
            </ThemeProvider>
            <ThemeProvider theme={blue}>
              <SelectColorBtn value='#2D9BF0' onClick={selectColorHandler} />
            </ThemeProvider>
            <ThemeProvider theme={deepblue}>
              <SelectColorBtn value='#414BB2' onClick={selectColorHandler} />
            </ThemeProvider>
          </SelectColorBox>

        </SelectColorBackdrop>
        : null}
    </SelectColorContainer>
  );
};
