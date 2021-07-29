import React from 'react';
import Form from './components/Form';
import { useHistory } from "react-router-dom";
import './style.css'

const WelcomePage = () =>{
    const history=useHistory();

    const onSubmit=()=>{
        history.push('/dashboard');
    }


    return(
        <div className="formPageCont">
            <Form
                title="Welcome!!"
                instructions="Please fill your data"
                onSubmit={onSubmit}/>
        </div>
    )

}

export default WelcomePage;