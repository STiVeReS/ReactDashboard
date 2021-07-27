import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function GridPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
           Grid
        </div>
    )
}