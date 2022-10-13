import React, { useState } from 'react';

export const Form = ({ setFormData }) => {
    const [data, setData] = useState();

    /* Get data from form */
    const getData = (e) => {
        e.preventDefault();
        let cardInfo = {
            name: e.target.name.value,
            number: e.target.number.value,
            month: e.target.month.value,
            year: e.target.year.value,
            cvc: e.target.cvc.value
        }
        setFormData(cardInfo);
    }

    return (
        <div className="form_container">
            <form className="formCard" onSubmit={ getData }>
                <p>
                    <label htmlFor="name">
                        Cardholder name
                    </label><br />
                    <input type="text" name="name" placeholder="e.g. Jane Appleseed" />
                </p>
                <p>

                    <label htmlFor="number">
                        Card number
                    </label><br />
                    <input type="text" name="number" placeholder="e.g. 1234 5678 9123 0000" />
                </p>
                <p className="formRow">
                    <div className="expiredDate">
                        <label htmlFor="expiredDate">
                            Exp. date (mm/yy)
                        </label>
                        <input type="number" name="month" placeholder="MM" />
                        <input type="number" name="year" placeholder="YY" />
                    </div>
                    <div className='cvc'>
                        <label htmlFor="cvc">
                            CVC
                        </label>
                        <input type="number" name="cvc" placeholder="e.g. 123" />
                    </div>
                </p>
                <br />
                <input type="submit" value="Confirm" className="btn"/>
            </form>
            {/* <button onClick={getData}>Click me</button> */}
        </div>
    )
}