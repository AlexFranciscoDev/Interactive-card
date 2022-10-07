import React from 'react'

export const Card = () => {
    return (
        <div>
            <div className="card-front">
                <div>
                    <img src="/img/card-logo.svg" alt="card-logo" />
                    <div className="card-circle"></div>
                </div>
                <p className="card-number">0000 0000 0000 0000</p>
                <div>
                    <span className="card-user">Felicia Leire</span>
                    <span className="card-expirement">09/26</span>
                </div>
            </div>
            <div className="card-back">
                <div className="card-cvc">123</div>
            </div>
        </div>
    )
}
