import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function TimelinePage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Timeline
        </div>
    )
}