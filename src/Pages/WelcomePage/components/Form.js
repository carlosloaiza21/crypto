import React, {useRef} from 'react';
import './styles.css'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../actions/user';

const Form=({onSubmit, title, instructions})=>{

    const formRef= useRef(null);

    const dispatch =useDispatch();


    const text =/^[a-zA-Z]+$/g;
    const number =/^[0-9]+$/g;
    const email =/^[a-zA-Z0-9]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]{3}$/g;

    const validate = (ev, type)=>{
        let validation;
        switch (type) {
            case 'text':
                validation = text;
                break;
            case 'number':
                validation = number;
                break;
            case 'email':
                validation = email;
                break;
            default:
                break;
        }
        if(ev.target.value.search(validation)<0){
            ev.target.classList.add('error')
        }else{
            ev.target.classList.remove('error')
        }  
    }

    const submit=(ev)=>{
        ev.preventDefault();
        const Form=formRef.current;
        dispatch(loginUser({
            userName:Form.name.value,
            userLast:Form.lastName.value,
            email:Form.email.value,
            phone:Form.phone.value
        }))
        onSubmit();
    }

    return(
        <div className="Form-Component">
            <h1>{title}</h1>
            <hr />
            <div>
                <p className="instructions">
                    {instructions}   
                </p>
                <div className="fields-div">
                    <form ref={formRef} onSubmit={submit} data-testid="form">
                    <input 
                        required
                        pattern="^[a-zA-Z]+$"
                        onChange={(ev)=>validate(ev,'text')}
                        placeholder="Name"
                        type="text"
                        name="name"
                        data-testid="name"
                    />
                    <input
                        required
                        pattern="^[a-zA-Z]+$"
                        onChange={(ev)=>validate(ev,'text')}
                        placeholder="Last Name"
                        type="text" name="lastName"
                        data-testid="lastName"
                    />
                    <input
                        required
                        pattern="^[a-zA-Z0-9]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]{3}$"
                        onChange={(ev)=>validate(ev,'email')}
                        placeholder="Email"
                        type="text" name="email"
                        data-testid="email"
                    />
                    <input
                        required
                        onChange={(ev)=>validate(ev,'number')}
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        data-testid="phone"
                    />
                    <input
                        data-testid="save"
                        className="Save"
                        value="Save"
                        type="submit"
                    />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;