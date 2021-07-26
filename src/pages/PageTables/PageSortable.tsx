import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function PageSortable({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            {label}
        </div>
    )
}