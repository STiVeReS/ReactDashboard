import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function ComponentsPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            <h2>{label}</h2>
        </div>
    )
}