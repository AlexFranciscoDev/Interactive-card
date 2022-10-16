import React, { useRef, useState } from 'react';

export const Form = ({ setFormData }) => {
    const [data, setData] = useState();

    const nameValue = useRef();
    const numberValue = useRef();
    const monthValue = useRef();
    const yearValue = useRef();
    const cvcValue = useRef();

    /* Get data from form */
    const getData = () => {
        let cardInfo = {
            name: nameValue.current.value,
            number: numberValue.current.value,
            month: monthValue.current.value,
            year: yearValue.current.value,
            cvc: cvcValue.current.value
        }
        setFormData(cardInfo);
    }

    return (
        <div className="form_container">
            <form className="formCard" >
                <p>
                    <label htmlFor="name">
                        Cardholder name
                    </label><br />
                    <input onChange={getData} ref={nameValue} type="text" name="name" placeholder="e.g. Jane Appleseed" />
                </p>
                <p>

                    <label htmlFor="number">
                        Card number
                    </label><br />
                    <input onChange={getData} ref={numberValue} type="text" name="number" placeholder="e.g. 1234 5678 9123 0000" />
                </p>
                <p className="formRow">
                    <div className="expiredDate">
                        <label htmlFor="expiredDate">
                            Exp. date (mm/yy)
                        </label>
                        <input onChange={getData} ref={monthValue} type="number" name="month" placeholder="MM" />
                        <input onChange={getData} ref={yearValue} type="number" name="year" placeholder="YY" />
                    </div>
                    <div className='cvc'>
                        <label htmlFor="cvc">
                            CVC
                        </label>
                        <input onChange={getData} ref={cvcValue} type="number" name="cvc" placeholder="e.g. 123" />
                    </div>
                </p>
                <br />
                <input type="submit" value="Confirm" className="btn" />
            </form>
            {/* <button onClick={getData}>Click me</button> */}
        </div>
    )
}