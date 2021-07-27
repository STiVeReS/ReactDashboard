import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function GooglePage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            <h3>{label}</h3>
        </div>
    )
}