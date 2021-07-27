import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function LoginPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Login
        </div>
    )
}