import axios from 'axios';

const SERVICE1 = 'https://public-api.stormgain.com/api/v1/ticker';
const SERVICE2 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple';
const SERVICE3 = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR$api_key=834561c7eb2498e367d675357ade081386e08e59e04e0467fa9ef5f85bac6077';


describe('Test services',()=>{
    it('stormgain',async ()=>{
        const data1=await axios.get(SERVICE1);
        expect(data1.data).toHaveProperty('BTC_USDC')
    })
    it('coingecko',async ()=>{
        const data1=await axios.get(SERVICE2);
        expect(data1.data[0]).toHaveProperty('current_price')
    })
    it('cryptocompare',async ()=>{
        const data1=await axios.get(SERVICE3);
        expect(data1.data).toHaveProperty('BTC')
    })
})