import {IDefaultForm} from "../../../utils/interfaces/forms";


export class ValidationHandler {
    validation(values: IDefaultForm) {
        const errors: IDefaultForm = {};

        if (!values.email) {
            errors.email = "Email is required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email"
        }

        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 4) {
            errors.password = "Password is too short"
        }
        return errors;
    }
}