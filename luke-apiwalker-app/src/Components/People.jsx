import React, { useState, useEffect } from 'react';
import axios from 'axios';

const People = (props) => {
    const { responseData } = props;
    const [homeworld, setHomeworld] = useState('');

    useEffect(() => {
        axios.get(responseData.homeworld)
            .then((response) => {
                setHomeworld(response.data.name);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [responseData]);

    return (
        <div>
            <h5>{responseData.name}</h5>
            <div>
                <p><span>Height:</span> {responseData.height}</p>
                <p><span>Hair Color:</span> {responseData.hair_color}</p>
                <p><span>Birth Year:</span> {responseData.birth_year}</p>
                <p><span>Gender:</span> {responseData.gender}</p>
                <p><span>Homeworld:</span> {homeworld}</p>
            </div>
        </div>
    );
};

export default People;
