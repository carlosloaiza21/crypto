import { Provider } from 'react-redux';
import STORE from '../../../STORE';
import Form from './Form';
import { fireEvent, render, screen } from '@testing-library/react';

const MockData={
    name:'carlos',
    last:'Loaiza',
    email:'carlosloaiza21@hotmail.com',
    phone:'5572814214'
}

const component=()=>render(<Provider store={STORE}>
    <Form />
</Provider>)

describe('Testing Form',()=>{
    it('render all inputs',()=>{
        component()
        expect(screen.getByTestId('name')).toBeInTheDocument();
        expect(screen.getByTestId('lastName')).toBeInTheDocument();
        expect(screen.getByTestId('email')).toBeInTheDocument();
        expect(screen.getByTestId('phone')).toBeInTheDocument();
        expect(screen.getByTestId('save')).toBeInTheDocument()
    })

    it('validate inputs values',()=>{
        component()
        fireEvent.change(screen.getByTestId('name'),{target:{value:MockData.name}})
        fireEvent.change(screen.getByTestId('lastName'),{target:{value:MockData.last}})
        fireEvent.change(screen.getByTestId('email'),{target:{value:MockData.email}})
        fireEvent.change(screen.getByTestId('phone'),{target:{value:MockData.phone}})
        
        expect(screen.getByTestId('name')).not.toHaveClass('error');
        expect(screen.getByTestId('lastName')).not.toHaveClass('error');
        expect(screen.getByTestId('email')).not.toHaveClass('error');
        expect(screen.getByTestId('phone')).not.toHaveClass('error');
        

    })
})