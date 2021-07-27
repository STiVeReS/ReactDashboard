import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function IconsPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Icons
        </div>
    )
}