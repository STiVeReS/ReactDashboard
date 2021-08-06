/*
* submitting
* */
import {ISubmitForm} from "../../../utils/interfaces/forms";

interface ISubmitActions {
    success?: any,
    failed?: any,
    entered?: any
}

export class SubmitHandler {
    constructor(
        public actions: ISubmitActions,
        public dispatch: any,
    ) {
    }

    submit(values: ISubmitForm) {
        this.dispatch(this.actions.entered(values));
    }
}