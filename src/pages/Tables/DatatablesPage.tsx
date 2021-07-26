import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function DatatablesPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            {label}
        </div>
    )
}