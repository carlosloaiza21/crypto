import React, {useState, useEffect} from 'react';
import './styles.css';

const CryptoConverter =({price1,price2,price3})=>{

    const [btc1,setBtc1]=useState();
    const [btc2,setBtc2]=useState();
    const [btc3,setBtc3]=useState();

    const [value, setValue]=useState()


    useEffect(() => {
        setBtc1(value*price1);
        setBtc2(value*price2);
        setBtc3(value*price3)
    }, [value])

    return(<div className="criptoConverter">
        <div className="row">
            <h3>MX</h3>
        </div>
        <div className="row">
            <h3>Cryptocompare</h3>
        </div>
        <div className="row">
            <h3>Stormgain</h3>
        </div>
        <div className="row">
            <h3>Coingecko</h3>
        </div>
        <div className="body">
            <input value={value} type="text" onChange={(ev)=>setValue(Number(ev.target.value))}/>
        </div>
        <div className="body">
            {btc1}
        </div>
        <div className="body">
            {btc2}
        </div>
        <div className="body">
            {btc3}
        </div>
        
    </div>)
}

export default CryptoConverter;