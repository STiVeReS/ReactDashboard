import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function ProfilePage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Profile
        </div>
    )
}