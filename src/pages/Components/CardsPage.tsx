import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function CardsPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Cards
        </div>
    )
}