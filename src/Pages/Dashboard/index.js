import React,{useEffect} from 'react';
import './style.css';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import { getDataAsync } from '../../actions/cripto';
import { useDispatch } from 'react-redux';
import CryptoConverter from '../../components/CryptoConverter';
const Dashboard=()=>{

    const dispatch=useDispatch()
    
    const user=useSelector(store=>store.userReducer.user[0])
    const cryptoCompare=useSelector(store=>store.criptoReducer);
    

    useEffect(() => {
        
        const id=setTimeout(()=>{
            dispatch(getDataAsync())
        },1000)
        return () => {
            clearTimeout(id)
        }
        
    }, [cryptoCompare])

    const show=(tab,tab1,tab2)=>{

        document.getElementById(tab).classList.remove('hidde')
        document.getElementById(tab1).classList.add('hidde')
        document.getElementById(tab2).classList.add('hidde')
    }

    const calculate=(ev)=>{
        console.log(Number(ev.target.value*19.88))
    }


    return(
        <div>
            <Header
                name={"carlos"/*user.userName*/}
                lastName={'Loaiza'/*user.userLast*/}
                email={'cloaiza@dd.com'/*user.email*/}
                phone={'55555'/*user.phone*/}
            />
            <button onClick={()=>show('BTC','ETH','XRP')}>BTC</button>
            <button onClick={()=>show('ETH','BTC','XRP')}>ETH</button>
            <button onClick={()=>show('XRP','ETH','BTC')}>XRP</button>
            <div className="DashPageCont">
                <div className="Tab" id="BTC">
                    <Card provider="Cryptocompare BTC" data={cryptoCompare.cryptoCompare_BTC} />
                    <Card provider="Stormgain BTC" data={cryptoCompare.stormgain_BTC}/>
                    <Card provider="Coingecko BTC" data={cryptoCompare.coingecko_BTC}/>
                    <CryptoConverter
                        price1={cryptoCompare.cryptoCompare_BTC[cryptoCompare.cryptoCompare_BTC.length-1]}
                        price2={cryptoCompare.stormgain_BTC[cryptoCompare.coingecko_BTC.length-1]}
                        price3={cryptoCompare.coingecko_BTC[cryptoCompare.coingecko_BTC.length-1]}
                    />
                    
                </div>
                <div className="Tab hidde" id="ETH">
                    <Card provider="Cryptocompare ETH" data={cryptoCompare.cryptoCompare_ETH_USDT} dolarValue="19.80" />
                    <Card provider="Stormgain ETH" data={cryptoCompare.stormgain_ETH_USDT}/>
                    <Card provider="Coingecko ETH" data={cryptoCompare.coingecko_ETH}/>
                </div>
                <div className="Tab hidde" id="XRP">
                    <Card provider="Cryptocompare XRP" data={cryptoCompare.cryptoCompare_XRP_USDT} dolarValue="19.80" />
                    <Card provider="Stormgain XRP" data={cryptoCompare.stormgain_XRP_USDT}/>
                    <Card provider="Coingecko XRP" data={cryptoCompare.coingecko_XRP}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;