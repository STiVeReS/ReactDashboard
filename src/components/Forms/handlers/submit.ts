/*
* submitting
* */
import {IDefaultForm, ISubmitForm} from "../../../utils/interfaces/forms";

interface ISubmitActions {
    status: (values: IDefaultForm) => {}
}

export class SubmitHandler {
    constructor(
        public actions: ISubmitActions,
        public dispatch: any,
    ) {
    }

    submit(values: ISubmitForm) {
        this.dispatch(this.actions.status(values));
    }
}