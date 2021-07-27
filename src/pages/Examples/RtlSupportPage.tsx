import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function RtlSupportPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            RtlSupport
        </div>
    )
}