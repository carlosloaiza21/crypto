import { Provider } from 'react-redux';
import STORE from '../../STORE';
import Card from './index';
import { render, screen } from '@testing-library/react';

const Props={
    name:'Api Provider name',
    data:[1,2,3,4,5,6],
}

const component=()=>render(<Provider store={STORE}>
    <Card provider={Props.name} data={Props.data}/>
</Provider>)

describe('Card',()=>{
    it('Card test',()=>{
        component()
        expect(screen.getByTestId('provider').textContent).toEqual(Props.name)
    })

    it('data size',()=>{
        expect(Props.data.length).toBeGreaterThan(1)
    })
    
        
})