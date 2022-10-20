import React from 'react';

export const Thankyou = ({ setValidatedCard }) => {
    const changeState = () => {
        setValidatedCard(false);
    }
    return (
        <div className="thankyou">
            <img className="thankyou-icon" src="./img/icon-complete.svg" alt="icon-complete" />
            <h3 className="thankyou-header">THANK YOU!</h3>
            <p className="thankyou-text">We've added your card details</p>
            <button className="btn" onClick={ changeState }>Continue</button>
        </div>
    )
}