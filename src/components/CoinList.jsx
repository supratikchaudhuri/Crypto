import React, { useContext, useEffect, useState } from 'react'
import coinGecko from "../api/coinGecko"
import {WatchListContext } from "../context/watchListContext"
import Coin from "./Coin"
import { CircularProgress } from '@material-ui/core';

function CoinList() {

    const [coins, setCoins] = useState([]);
    const  {watchList, deleteCoin}  = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        // console.log(coins);
        const fetchData = async () => {
            setIsLoading(true);

            const response = await coinGecko.get("/coins/markets", {
                params : {
                    vs_currency :"usd",
                    ids : watchList.join(",")   //joining every element of the array to a string separated by a ,
                }
            })
            setCoins(response.data);
            setIsLoading(false);
        }

        //when its empty we are passing empty param.id and by defalt its gonna fetch all the coins
        if(watchList.length > 0){
            fetchData();
        } else{
            setCoins([]);
        }
        // console.log(coins); //why printing empty  array on first render?
    }, [watchList]);



    const renderCoins = () => {
        if(isLoading)
            return <CircularProgress/>

        return (
            <ul className="coinlist list-group mt-2">
                {coins.map(coin => {
                    return <Coin key = {coin.id} coin={coin} deleteCoin={deleteCoin}/>
                })}
            </ul>
        )
    }


    return (
        <div>
        {/* this cpmponent responsible for fetching data from the API */}
            {renderCoins()}
        </div>
    )
}

export default CoinList
