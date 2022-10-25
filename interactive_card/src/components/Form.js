import React, { useState } from 'react';
// import { useForm } from '../customHooks/useForm';
import { useForm } from "react-hook-form";

export const Form = ({ setFormData, setValidatedCard }) => {
    const [data, setData] = useState();
    // useForm variables
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    /* variable to keep the errors */


    /* Get data from form */
    const getData = () => {
        let cardInfo = {
            name: getValues("name"),
            number: getValues("number"),
            month: getValues("month"),
            year: getValues("year"),
            cvc: getValues("cvc")
        }
        console.log(cardInfo);
        setFormData(cardInfo);
    }

    /* Submit the form and validate it */
    const onSubmit = () => {
        setValidatedCard(true);
    }

    return (
        <div className="form_container">
            <form className="formCard" onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <label htmlFor="name">
                        Cardholder name
                    </label><br />
                    <input
                        className={errors.name && "errorInput"}
                        type="text"
                        name="name"
                        placeholder="e.g. Jane Appleseed"
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: "Can't be blank"
                                },
                                pattern: {
                                    value: /^[a-zA-Z\s]*$/,
                                    message: "Wrong format, letters only"
                                },
                                onChange: getData
                            })}
                    />
                    {errors.name && <span className={errors.name && "error"}>{errors.name.message}</span>}
                </p>
                <p>

                    <label htmlFor="number">
                        Card number
                    </label><br />
                    <input
                        className={errors.number && "errorInput"}
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                        {...register("number",
                            {
                                required:
                                {
                                    value: true,
                                    message: "Can't be blank"
                                },
                                pattern: {
                                    value: /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}?$/,
                                    message: "Wrong format, numbers only"
                                },
                                onChange: getData
                            })
                        }
                    />
                    {errors.number && <span className={errors.number && "error"}>{errors.number.message}</span>}
                </p>
                <p className="formRow">
                    <div className="expiredDate">
                        <label htmlFor="expiredDate">
                            Exp. date (mm/yy)
                        </label>
                        <input
                            className={errors.month && "errorInput"}
                            onChange={getData}    
                            type="number"
                            name="month"
                            placeholder="MM"
                            max="12"
                            {...register("month",
                                {
                                    required: {
                                        value: true,
                                        message: "Can't be blank"
                                    },
                                    pattern: {
                                        value: /^(0[1-9]|1[0-2])$/,
                                        message: "Only numbers from 01 to 12"
                                    },
                                    onChange: getData
                                })
                            }
                        />
                        
                        <input
                            className={errors.year && "errorInput"}
                            onChange={getData}
                            type="number"
                            name="year"
                            placeholder="YY"
                            max="99"
                            {...register("year",
                                {
                                    required: {
                                        value: true,
                                        message: "Can't be blank"
                                    },
                                    pattern: {
                                        value: /^[0-9]{2}$/,
                                        message: "Wrong format, numbers only"
                                    },
                                    onChange: getData
                                })
                            }
                        />
                        {errors.month && <span className={errors.month && "error"}>{errors.month.message}</span>}
                        {errors.year && <span className={errors.year && "error"}>{errors.year.message}</span>}
                    </div>
                    <div className='cvc'>
                        <label htmlFor="cvc">
                            CVC
                        </label>
                        <input
                            className={errors.cvc && "errorInput"}
                            onChange={getData}
                            type="number"
                            name="cvc"
                            placeholder="e.g. 123"
                            max="999"
                            {...register("cvc",
                                {
                                    required: {
                                        value: true,
                                        message: "Can't be blank"
                                    },
                                    pattern: {
                                        value: /^[0-9]{3}$/,
                                        message: "Only 3 numbers allowed"
                                    },
                                    onChange: getData
                                })
                            }
                        />
                        {errors.cvc && <span className={errors.cvc && "error"}>{errors.cvc.message}</span>}
                    </div>
                </p>
                <br />
                <input type="submit" value="Confirm" className="btn" />
            </form>
            {/* <button onClick={getData}>Click me</button> */}
        </div>
    )
}