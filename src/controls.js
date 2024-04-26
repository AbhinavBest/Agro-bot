import React from 'react';

export default function Controls(){

    const plow = () =>{
        console.log("plowing")
    }

    const irrig = () =>{
        console.log("irrigating")
    }

    const sow = () =>{
        console.log("sowing")
    }

    //add "signal sending" events to the above respective functions

    return(
        <div className='controls-container'>
            <div className='plow control-btn' onClick={plow}>PLOWING</div>
            <div className='irrig control-btn' onClick={irrig}>IRRIGATION</div>
            <div className='sow control-btn' onClick={sow}>SOWING</div>
        </div>
    )
}