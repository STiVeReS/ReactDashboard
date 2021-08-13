import React from 'react';
import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import {useDispatch, useSelector} from "react-redux";

/*
* interface
* */
import {IDefaultForm, IFormTitle} from "../../../utils/interfaces/forms";

/*
* actions
* */
import {loginStatus} from "../../../store/auth/sagas/login/loginActions";

/*
* components
* */
import {FormHeader} from "./FormHeader";
import {authStatusSelector} from "../../../store/auth/selectors";
import {FormErrorMsg} from "./FormErrorMsg";
// import {AuthStatus} from "../../../store/auth/reducer";
import {RequestStatus} from "../../../store/shared/requests/requestStatus";

export function SignIn({title, link}: IFormTitle) {
    const dispatch = useDispatch();
    const {loginRequestStatus} = useSelector(authStatusSelector);

    /*
    * fields validation handler
    * */
    const validationHandler = (values: IDefaultForm) => {
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

    /*
    * submit handler
    * */
    const submitHandler = (
        values: IDefaultForm,
        // {setSubmitting}: FormikHelpers<any>
    ): void => {
        console.log(loginRequestStatus)
        dispatch(loginStatus(values));
    }


    return (
        <>
            <FormHeader header={"Welcome"}
                        text={"Use these awesome forms to auth or create new account in your project for free"}/>
            <div className={"col-12"}>
                <div className={"log-form py-5 px-2 px-lg-5"}>
                    <small>{title} <Link to={`${link}`}>Create Account</Link></small>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validate={validationHandler}
                        onSubmit={submitHandler}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <div className={"log-form__field"}>
                                    <i className="bi bi-envelope"></i>
                                    <Field type="email" name="email" placeholder="email"/>
                                </div>

                                <ErrorMessage className={"log-form__err"} name="email" component="div"/>
                                <div className={"log-form__field"}>
                                    <i className="bi bi-lock-fill"></i>
                                    <Field type="password" name="password" placeholder="password"/>
                                </div>

                                <ErrorMessage className={"log-form__err"} name="password" component="div"/>
                                <button type="submit">
                                    Sign in
                                </button>
                            </Form>
                        )}
                    </Formik>
                    {loginRequestStatus === RequestStatus.FAILED
                        ? <FormErrorMsg msg={"Please check email and password fields and try again"}/>
                        : null
                    }
                </div>
            </div>
        </>
    )
}