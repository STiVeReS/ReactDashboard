import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function RegisterPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Register
        </div>
    )
}