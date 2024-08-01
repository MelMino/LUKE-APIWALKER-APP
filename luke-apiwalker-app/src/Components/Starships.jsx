import React from 'react';

const Starships = (props) => {
    const {responseData} = props
    return (
        <div>
            <h5>{responseData.name}</h5>
            <div>
                <p><span>Model:</span> {responseData.model}</p>
                <p><span>Manufacturer:</span> {responseData.manufacturer}</p>
                <p><span>Cost in credits:</span> {responseData.cost_in_credits}</p>
                <p><span>Max Atmosphering Speed:</span> {responseData.max_atmosphering_speed}</p>
            </div>
        </div>
    );
}
export default Starships;