import React from 'react'
import AddCoin from "../components/AddCoin"
import CoinList from "../components/CoinList"

function CoinSummary() {
    return (
        <div className = "neoshadow">
            <AddCoin/>
            <CoinList/>
        </div>
    )
}

export default CoinSummary
