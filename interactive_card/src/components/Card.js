import React, { useEffect, useState } from 'react'

export const Card = ({ formData }) => {
    const [cardValues, setCardValues] = useState({});
    /* Change data from cards on change */
    useEffect(() => {
        setCardValues(formData);
    }, [formData])
    return (
        <div className="cards">
            <div className="card-front">
                <div>
                    <img src="/img/card-logo.svg" alt="card-logo" />
                    <div className="card-circle"></div>
                </div>
                <p className="card-number">{cardValues.number ? cardValues.number : "9591 0000 0000 0000"}</p>
                <div className="card-details">
                    <span className="card-user">{ cardValues.name ? cardValues.name : "FELICIA LEIRE" }</span>
                    <span className="card-expirement">{ cardValues.month ? cardValues.month : "09" }/{ cardValues.year ? cardValues.year : "00" }</span>
                </div>
            </div>
            <div className="card-back">
                <div className="card-cvc">{ cardValues.cvc ? cardValues.cvc : "000"}</div>
            </div>
        </div>
    )
}
