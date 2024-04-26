import React, { useState } from 'react';

export default function Ml(){

    const capture = () => {
        console.log('captured');
    }

    const predict = () => {
        console.log('predicted');
    }

    const[prediction,setPrediction] = useState('Healthy');

    return(
        <div className='ml-container'>
            <div className='ml-col-1'>
                <div className='capture ml-controls' onClick={capture}>Capture</div>
                <div className='predict ml-controls' onClick={predict}>Predict</div>
            </div>
            <div className='ml-col-2'>
                <div className='ml-state-container'>
                    <h1>Current State: {prediction}</h1>
                </div>
            </div>
        </div>
    )
}