import React from 'react';


const Status = ({ currentPlayer }) => {
    return (
        <div className="status-container">
            <h2 className="status">Next: {currentPlayer}</h2>
        </div>
    );
};


export default Status;
