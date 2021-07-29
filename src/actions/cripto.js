import axios from "axios";
export const GET_DATA = "GET_DATA";

const getData=(data)=>({
    type:GET_DATA,
    payload:data
})

export const getDataAsync = () => {
    return async dispatch=>{
        const stormgain=await axios.get('https://public-api.stormgain.com/api/v1/ticker')
        const coingecko = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple')
        const cryptoCompare = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR$api_key=834561c7eb2498e367d675357ade081386e08e59e04e0467fa9ef5f85bac6077')
        dispatch(getData({
            stormgain_BTC:stormgain.data.BTC_USDT.last_price,
            coingecko_BTC:coingecko.data[0].current_price,
            cryptoCompare_BTC:cryptoCompare.data.BTC.USD,

            stormgain_ETH_USDT:stormgain.data.ETH_USDT.last_price,
            coingecko_ETH:coingecko.data[1].current_price,
            cryptoCompare_ETH_USDT:cryptoCompare.data.ETH.USD,

            stormgain_XRP_USDT:stormgain.data.XRP_USDT.last_price,
            coingecko_XRP:coingecko.data[2].current_price,
            cryptoCompare_XRP_USDT:cryptoCompare.data.XRP.USD,

        }))
    }
    
}

