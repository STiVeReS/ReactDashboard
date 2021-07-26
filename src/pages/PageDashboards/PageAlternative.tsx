import React from 'react';

interface IProps {
    label?: string
    page?: string
    child?: string
}

export function PageAlternative({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            {page} {label} {page}
        </div>
    )
}