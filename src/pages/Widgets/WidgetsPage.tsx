import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function WidgetsPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Widgets
        </div>
    )
}