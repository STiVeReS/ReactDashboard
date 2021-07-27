import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function MultiLevelPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            MultiLEvel
        </div>


    )
}