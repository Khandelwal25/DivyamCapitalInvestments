import React from "react";
import { Link } from "react-router-dom";

const FundCard = ({fund}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-64 flex-shrink-0">
            <h2 className="text-xl font-bold">{fund.name}</h2>
            <p>{fund.description}</p>
            <Link to={`/funds/${fund._id}`} className="text-blue-600">View Details</Link>
        </div>
    );
}

export default FundCard;