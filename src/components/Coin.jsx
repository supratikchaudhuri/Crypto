import React from 'react'
import {Link} from "react-router-dom"
import _ from "lodash"

function Coin({coin, deleteCoin}) {

    const inlineDisplay = {
        display : "inline"
    }
    // console.log(coin.current_price.toFixed(2).toLocaleString());
    return (
        
        // link from react router dom cuz when cliked it takesus to coin details page
        <Link to={`coins/${coin.id}`} className="text-decoration-none my-1 coin">
            <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
            <div style={inlineDisplay}>
                <img className="coinlist-image" src={coin.image} alt="" />
                {/* <h6>{coin.id}</h6> */}
            </div>
            
            <span className="text-decoration-none">{_.upperCase(coin.symbol)}</span>

            <span className="text-decoration-none">{coin.market_cap_rank}</span>
            <span className="text-decoration-none">${coin.current_price.toFixed(2)}</span>

            <span 
                className={coin.price_change_percentage_24h > 0 ? 
                "text-success mr-2" : 
                "text-danger mr-2"}>

                {coin.price_change_percentage_24h > 0 ?
                (<i className="fas fa-sort-up align-middle mr-1"/>) :
                (<i className="fas fa-sort-down align-middle mr-1"/>)}
                
                {coin.price_change_percentage_24h.toFixed(4)}

            </span>

            <span className="text-decoration-none">${coin.market_cap.toLocaleString()}</span>


            <i 
                className="far fa-times-circle text-danger delete-icon"
                onClick={(e) => {
                    e.preventDefault(); //so it doesn't navigate to the other page as it is a link 
                    deleteCoin(coin.id);
                }}
            />

            </li>
            
        </Link>
    )
}

export default Coin
