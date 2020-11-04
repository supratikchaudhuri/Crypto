import React , {createContext, useState} from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState([
        "bitcoin",
        "ethereum",
        "ripple",
    ]);

    const addCoin = (coin) => {
        if(watchList.indexOf(coin) === -1){
            setWatchList([...watchList, coin]);
        }   
    }

    const deleteCoin = (coinId) => {
        setWatchList(watchList.filter((el) => {
            return el !== coinId;
        }))
    };

    return (
        <WatchListContext.Provider value = {{watchList, deleteCoin, addCoin}}>
            {props.children}
        </WatchListContext.Provider>
    )
} 