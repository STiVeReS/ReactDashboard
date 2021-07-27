import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function TypographyPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Typography
        </div>
    )
}