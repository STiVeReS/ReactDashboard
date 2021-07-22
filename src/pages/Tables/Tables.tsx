import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function Tables({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            {label}
        </div>
    )
}