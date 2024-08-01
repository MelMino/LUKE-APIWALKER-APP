import React from 'react';

const Planets = (props) => {
    const {responseData} = props

    return (
        <div>
            <h5>{responseData.name}</h5>
            <div>
                <p><span>Climate:</span> {responseData.climate}</p>
                <p><span>Gravity:</span> {responseData.gravity}</p>
                <p><span>Terrain:</span> {responseData.terrain}</p>
                <p><span>Climate:</span> {responseData.climate}</p>
            </div>
        </div>
    );
}
export default Planets;