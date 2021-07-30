import React from 'react';
import './style.css';


const Card = ({provider,data}) =>{

    return(
        <div className="cardContent">
            <h1>{data?data[data.length-1]:''}</h1>
            <h3>{provider}</h3>
            <hr/>
            <div className="rowsContent">
                {
                    data?
                    data.map((item,index)=>{
                      return (
                          <div key={Math.random()} className="row">
                            <div>{item}</div>   
                        </div>)
                    }):''
                    
                }
            </div>
            
            
        </div>
    )
}

export default Card;