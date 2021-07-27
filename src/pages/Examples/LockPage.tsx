import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function LockPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Lock
        </div>
    )
}