import React from 'react';

/*
* components
* */
import {FormContainer} from "../../components/Forms/FormContainer";
import {SignIn} from "../../components/Forms/Layouts/SignIn";


export function Auth() {
    return (
        <FormContainer>
            <SignIn title={"Sign in"} link={"/auth/create-account"}/>
        </FormContainer>
    )
}