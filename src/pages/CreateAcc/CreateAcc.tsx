import React from 'react'

/*
* component
* */
import {Register} from "../../components/Forms/Layouts/Register";
import {FormContainer} from "../../components/Forms/FormContainer";


export function CreateAcc() {
    return (
        <FormContainer>
            <Register title={"Fill the following fields"}/>
        </FormContainer>
    )
}