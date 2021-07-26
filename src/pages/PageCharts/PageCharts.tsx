import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function PageCharts({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Charts
        </div>
    )
}