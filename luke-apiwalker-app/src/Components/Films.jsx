import React from 'react';

const Films = (props) => {
    const {responseData} = props
    return (
        <div>
            <h5>{responseData.title}</h5>
            <div>
                <p><span>Release Date:</span> {responseData.release_date}</p>
                <p><span>Episode:</span> {responseData.episode_id}</p>
                <p><span>Director:</span> {responseData.director}</p>
                <p><span>Producer:</span> {responseData.producer}</p>
            </div>
        </div>
    );
}
export default Films;