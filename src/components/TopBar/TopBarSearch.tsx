import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background: #123456;
    background: ${props => props.in ? props.example : ''}
`;

interface IProps {
    bgColor: string
}

export function TopBarSearch({bgColor}: IProps) {
    return (
        <Input
            placeholder={'hello'}
            example={bgColor}
        />
    )
}

