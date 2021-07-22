import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function Widgets({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Widgets
        </div>
    )
}