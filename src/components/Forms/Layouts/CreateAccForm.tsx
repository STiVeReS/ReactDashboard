import React from 'react';
import {Formik, Field, Form, FormikHelpers, ErrorMessage} from 'formik';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

/*
* interface
* */
import {IDefaultForm, IFormTitle, ISubmitForm} from "../../../utils/interfaces/forms";

/*
* components
* */
import {FormHeader} from "./FormHeader";
import {registered} from "../../../store/auth/sagas/actions";


export function CreateAccForm({title, link}: IFormTitle) {
    const dispatch = useDispatch();

    /*
    * form validation
    * */
    const handleValidation = (values: IDefaultForm) => {
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
    * submitting
    * */
    const handleSubmit = (values: IDefaultForm,  {setSubmitting}: FormikHelpers<ISubmitForm>) => {
        dispatch(registered(values));
        // setSubmitting(true);
    }


    return (
        <>
            <FormHeader header={"Create your personal account"}/>
            <div className={"col-12"}>
                <div className={"log-form py-5 px-2 px-lg-5"}>
                    <small>{title} <Link to={`${link}`}></Link></small>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validate={handleValidation}
                        onSubmit={handleSubmit}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <div className={"log-form__field"}>
                                    <i className="bi bi-envelope"></i>
                                    <Field
                                        type={"text"}
                                        name={"email"}
                                        placeholder={"mail@example.com"}
                                    />
                                </div>
                                <ErrorMessage className={"log-form__err"} name="email" component="div"/>

                                <div className={"log-form__field"}>
                                    <i className="bi bi-lock-fill"></i>
                                    <Field
                                        type={"password"}
                                        name={"password"}
                                        placeholder={"password"}
                                    />
                                </div>
                                <ErrorMessage className={"log-form__err"} name="password" component="div"/>
                                <button type="submit" /*disabled={isSubmitting}*/>
                                    Create Account
                                </button>
                            </Form>
                        )}
                    </Formik>
                    {/*{status ? <Redirect to="/dashboard/main"/> : ''}*/}
                </div>
            </div>
        </>
    )
}