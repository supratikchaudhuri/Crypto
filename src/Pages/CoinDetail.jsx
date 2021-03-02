import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import coinGecko from '../api/coinGecko';
import Chart from "../components/Chart"; 
import ExtraData from "../components/ExtraData"; 
import { CircularProgress } from '@material-ui/core';

function CoinDetail() {
    const {id} = useParams();
    // console.log(`parameter: ${id}`);
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const formatData = (data) => {  //to format from array to object
        const formatted = data.prices.map(el => {
            return {
                t : el[0],
                y : el[1].toFixed(2)
            }
        });
        // console.log("old data");
        // console.log(data);
        // console.log("new data");
        // console.log(formatted);
        return formatted;
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const [dailyResult, weeklyResult, yearlyResult, detail] = await Promise.all ([
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency : "usd",
                        days : "1"
                    }
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency : "usd",
                        days : "7"
                    }
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency : "usd",
                        days : "365"
                    }
                }),
                coinGecko.get("/coins/markets", {
                    params : {
                        vs_currency :"usd",
                        ids : id   //joining every element of the array to a string separated by a ,
                    }
                })
            ]);
            // console.log(dailyResult.data);

            setCoinData({
                day : formatData(dailyResult.data),
                week : formatData(weeklyResult.data),
                year : formatData(yearlyResult.data),
                details : detail.data[0]
            });  
            // console.log(coinData);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    
    const renderData = () => {
        if(isLoading){
            return (
                <CircularProgress/>
            )
        }
        return (
            <div className="neoshadow">
                <Chart data={coinData}/>
                <ExtraData data = {coinData.details}/>  
            </div>
        )
    }

    return (
        renderData()
    )
}

export default CoinDetail
