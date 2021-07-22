import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function Charts({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Charts
        </div>
    )
}