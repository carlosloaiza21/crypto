import { GET_DATA } from '../actions/cripto';
const initialData={
    cryptoCompare_BTC:[],
    stormgain_BTC:[],
    coingecko_BTC:[],

    stormgain_ETH_USDT:[],
    cryptoCompare_ETH_USDT:[],
    coingecko_ETH:[],

    stormgain_XRP_USDT:[],
    cryptoCompare_XRP_USDT:[],
    coingecko_XRP:[]


}

const criptoReducer=(state=initialData,action)=>{
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                cryptoCompare_BTC:[...state.cryptoCompare_BTC,action.payload.cryptoCompare_BTC],
                stormgain_BTC:[...state.stormgain_BTC,action.payload.stormgain_BTC],
                coingecko_BTC:[...state.coingecko_BTC,action.payload.coingecko_BTC],

                stormgain_ETH_USDT:[...state.stormgain_ETH_USDT,action.payload.stormgain_ETH_USDT],
                cryptoCompare_ETH_USDT:[...state.cryptoCompare_ETH_USDT,action.payload.cryptoCompare_ETH_USDT],
                coingecko_ETH:[...state.coingecko_ETH,action.payload.coingecko_ETH],

                stormgain_XRP_USDT:[...state.stormgain_XRP_USDT,action.payload.stormgain_XRP_USDT],
                cryptoCompare_XRP_USDT:[...state.cryptoCompare_XRP_USDT,action.payload.cryptoCompare_XRP_USDT],
                coingecko_XRP:[...state.coingecko_XRP,action.payload.coingecko_XRP],
            }
        default:
            return state;
    }
}

export default criptoReducer;