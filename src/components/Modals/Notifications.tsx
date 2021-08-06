import React from 'react';

/*
* constants
* */
import {NOTIFICATIONS} from "../../utils/constants/nitifications/notifications";



export function Notifications() {
    const renderNotification = NOTIFICATIONS.map((item, index) => {
        return (
            <div className={"pop-up__item"} key={index}>
                <span className={"pop-up__user-link"}>
                    <img className={"pop-up__img"} src={item.icon} alt={item.userName}/>
                </span>
                <div className={"pop-up__info"}>
                    <h6>{item.userName}</h6>
                    <p>{item.msg}</p>
                </div>
            </div>
        )
    })

    return (
        <div className={"pop-up"}>
            {renderNotification}
        </div>
    )
}