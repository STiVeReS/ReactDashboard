import React from 'react';

interface IProps {
    label?: string
    page?: string
    child?: string
}

export function Calendar({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Calendar
        </div>
    )
}