import React from 'react';

interface IProps {
    label: string
    page?: string
    child?: string
}

export function NotificationsPage({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            Notifications
        </div>
    )
}