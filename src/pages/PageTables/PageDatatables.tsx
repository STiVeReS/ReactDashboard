import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function PageDatatables({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            {label}
        </div>
    )
}