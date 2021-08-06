/*
* images
* */
import userOne from '../../../assets/images/users/user-1.jpg'
import userTwo from '../../../assets/images/users/user-2.jpg'
import userThree from '../../../assets/images/users/user-3.jpg'

/*
* interface
* */
interface INotifications {
    icon: string;
    userName: string;
    msg: string;
    time: string;
}

export const NOTIFICATIONS: INotifications[] = [
    {
        icon: userOne,
        userName: 'John',
        msg: 'Hello',
        time: '',
    },
    {
        icon: userTwo,
        userName: 'Brad',
        msg: 'Currently i am out of....',
        time: '',
    },
    {
        icon: userTwo,
        userName: 'Alex',
        msg: 'brb',
        time: '',
    },
    {
        icon: userOne,
        userName: 'Important',
        msg: 'this was an outstanding performance',
        time: '',
    },
    {
        icon: userThree,
        userName: 'Mat',
        msg: 'When can i start ?',
        time: '',
    },
];