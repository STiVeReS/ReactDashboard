import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';

/*
* components
* */

export function PageLogin() {
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => setIsLogin(prevState => true);

    interface IFormValues {
        email?: string,
        password?: string
    }

    return (
        <div className={"login"}>
            <div className={"login__inner"}>
                <h2>Please login for viewing pages</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors: IFormValues = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            handleLogin();
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <Field type="email" name="email" placeholder="mail@example.com"/>
                            <ErrorMessage name="email" component="div"/>
                            <Field type="password" name="password" placeholder="password"/>
                            <ErrorMessage name="password" component="div"/>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                {isLogin ? <Redirect to="dashboard/main"/> : ''}
            </div>
        </div>
    )
}