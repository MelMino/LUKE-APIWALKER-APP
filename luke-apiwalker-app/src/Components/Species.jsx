import React from 'react';

const Species = (props) => {
    const {responseData} = props

    return (
        <div>
            <h5>{responseData.name}</h5>
            <div>
                <p><span>Classification:</span> {responseData.classification}</p>
                <p><span>Average lifespan:</span> {responseData.average_lifespan}</p>
                <p><span>Average height:</span> {responseData.average_height}</p>
                <p><span>Language:</span> {responseData.language}</p>
            </div>
        </div>
    );
}

export default Species;