import React from 'react';
import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";

/*
* interface
* */
import {IFormTitle} from "../../../utils/interfaces/forms";

/*
* components
* */
import {FormHeader} from "./FormHeader";

import {loggedIn, loginSucceed} from "../../../store/auth/sagas/actions";

import {SubmitHandler} from "../handlers/submit";
import {ValidationHandler} from "../handlers/validation";

export function SignIn({title, link}: IFormTitle) {

    const validationHandler = new ValidationHandler();
    const submitHandler = new SubmitHandler(
        {entered: loggedIn, success: loginSucceed},
        useDispatch()
    );


    return (
        <>
            <FormHeader header={"Welcome"}
                        text={"Use these awesome forms to auth or create new account in your project for free"}/>
            <div className={"col-12"}>
                <div className={"log-form py-5 px-2 px-lg-5"}>

                    <small>{title} <Link to={`${link}`}>Create Account</Link></small>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validate={(values) => validationHandler.validation(values)}
                        onSubmit={(values) => submitHandler.submit(values)}
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
                </div>
            </div>
        </>
    )
}