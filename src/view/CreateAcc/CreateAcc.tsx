import React from 'react'

/*
* component
* */
import {CreateAccForm} from "../../components/Forms/Layouts/CreateAccForm";
import {FormContainer} from "../../components/Forms/FormContainer";


export function CreateAcc() {
    return (
        <FormContainer>
            <CreateAccForm title={"Fill the following fields"}/>
        </FormContainer>
    )
}