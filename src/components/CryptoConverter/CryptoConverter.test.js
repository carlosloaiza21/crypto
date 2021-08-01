import { Provider } from 'react-redux';
import STORE from '../../STORE';
import CryptoConverter from './index';
import { render, screen } from '@testing-library/react';


const component=()=>render(<Provider store={STORE}>
    <CryptoConverter />
</Provider>)

describe('CryptoConverter',()=>{
    it('Render',()=>{
        component()

        expect(document.getElementsByClassName('criptoConverter')[0]).toBeInTheDocument()
    })  
})