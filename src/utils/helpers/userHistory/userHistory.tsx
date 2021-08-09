import {useHistory} from "react-router-dom";


export function AddUserHistory(url: string) {
    const history = useHistory();

    return function handleClick() {
        console.log(history)
        history.push(`/${url}`);
    }
}
