import React from 'react';

interface IProps {
    label?: string
    page?: string
    child?: string
}

export function AlternativePage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            {page} {label} {page}
        </div>
    )
}