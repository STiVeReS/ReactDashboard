import React from 'react';
import styled from 'styled-components';
import {ThemeProvider} from "styled-components";

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 25px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.color};
  }
  
  :-ms-input-placeholder {
    color: ${props => props.theme.color};
  }
`;

Input.defaultProps = {
    theme: {
        background: '#fff',
        color: '#000'
    }
}

interface IProps {
    bgColor?: string
    color?: string
}

export function Search({bgColor, color}: IProps) {

    const theme = {
        background: bgColor,
        color: color
    }

    return (
        <ThemeProvider theme={theme}>
            <Input placeholder={'Search'}/>
        </ThemeProvider>
    )
}

