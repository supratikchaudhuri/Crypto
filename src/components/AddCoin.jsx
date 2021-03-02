import React, { useState, useContext } from "react";
import {WatchListContext } from "../context/watchListContext"

const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);
    const { addCoin } = useContext(WatchListContext);
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
        "cardano",
        "doge",
        "polkadot",
        "monero",
    ];

    const handleClick = (coin) => {
        // console.log("adding" + coin);
        addCoin(coin);
        setIsActive(false);
    };

    return (
        <div className="dropdown">
        <button
            onClick={() => setIsActive(!isActive)}
            className="btn bg-color dropdown-toggle"
            type="button"
        >
            +
        </button>
        <div className={isActive ? "dropdown-menu show bg" : "dropdown-menu"}>
            {availableCoins.map((el) => {
                return (
                    <a
                    key = {el}
                    onClick={() => handleClick(el)}
                    href="#"
                    className="dropdown-item bg item"
                    >
                    {el}
                    </a>
                );
            })}
        </div>
        </div>
    );
};

export default AddCoin;
