import React from 'react';

export const Form = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="name">
                    Cardholder name
                    <input type="text" name="name" placeholder="e.g. Jane Appleseed" />
                </label>
                <label htmlFor="number">
                    Card number
                    <input type="text" name="number" placeholder="e.g. 1234 5678 9123 0000" />
                </label>
                <label htmlFor="expiredDate">
                    <input type="number" name="month" placeholder="MM" />
                    <input type="number" name="year" placeholder="YY" />
                </label>
                <label htmlFor="cvc">
                    CVC
                    <input type="number" name="cvc" placeholder="e.g. 123" />
                </label>
                <input type="submit" value="Confirm" />
            </form>
        </div>
    )
}