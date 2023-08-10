'use client'
import { useState, useEffect } from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        email: '',
    });

    const [isSubmitting, setSubmitting] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const [errors, setErrors] = useState({});

    //MODAL
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFail, setModalFail] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(value)
    };

    const handlePress = e => {
        e.preventDefault();

        setErrors(validate(values))
        if (values.email === null
            && values.email === "") {
            console.log('error')
        } else {
            setLoading(true)
            fetch(
                '/api/route',
                {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(function (res) {
                    console.log("RESPONSEEEEE", res)

                    if (res.status == 202) {
                        setSubmitting(true);
                        setLoading(false)
                        setModalSuccess(true)
                        setValues({
                            email: '',
                        });
                    } else {
                        setLoading(false)
                        setModalFail(true)
                        setValues({
                            email: '',
                        });
                    }

                }).catch(function (err) {
                    console.error("ERROOOOOORR>>>>", err)
                    setModalFail(true)
                    setValues({
                        email: '',
                    });
                })
                .finally(() => {
                    // setSubmitting(false);
                });
        }
    };

    return {
        isSubmitting,
        handleChange,
        values,
        handlePress,
        errors,
        modalSuccess,
        modalFail,
        setValues,
        isLoading
    };

};

export default useForm;

