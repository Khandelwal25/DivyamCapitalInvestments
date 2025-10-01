import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FundCard from "../FundCard";

const Home = () => {
    const [funds, setFunds] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/funds").then((res) => setFunds(res.data));
    },[]);

    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Invest with Confidence</h1>
            <div className="flex overflow-x-auto space-x-4">
                {funds.map((fund) => (
                    <FundCard key={fund._id} fund={fund} />
                ))}
            </div>
        </div>
    );
}


export default Home;