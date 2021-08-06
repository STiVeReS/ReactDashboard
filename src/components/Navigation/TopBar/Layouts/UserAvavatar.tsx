import React, {useState} from 'react';

/*
* components
* */
import {Notifications} from "../../../Modals/Notifications";

/*
* images
* */
import imageOne from "../../../../assets/images/users/user-1.jpg";


export function UserAvavatar() {
    const [notifications, setNotifications] = useState(false);
    const notificationsHandler = () => {
        setNotifications(prevState => !prevState)
    }

    return (
        <div className={"login-bar"}>
            <ul className={"login-bar__list"}>
                <li>
                    <i onClick={notificationsHandler}
                       className="login-bar__icon bi bi-bell-fill"></i>
                    {notifications ? <Notifications/> : ''}
                </li>
                <li>
                    <i className="login-bar__icon bi bi-files"></i>
                </li>
            </ul>


            <div className={"login-bar__user"}>
                <img className={"login-bar__avatar"} src={imageOne} alt={"user"}/> <span
                className={"login-bar__user-name"}>User One</span>
            </div>
        </div>
    )
}
