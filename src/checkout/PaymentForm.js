import React, { useState } from "react";

function PaymentForm() {
    const [amount, setAmount] = useState();
    const [bankCode, setBankCode] = useState();
    const [language, setLanguage] = useState("vn");

    const handleSubmit = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/payment/create_payment_url`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                amount: amount,
                bankCode: bankCode,
                language: language,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div>
                <label>Amount:</label>
                <input
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label>Bank Code:</label>
                <input
                    type='text'
                    value={bankCode}
                    onChange={(e) => setBankCode(e.target.value)}
                />
            </div>
            <div>
                <label>Language:</label>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}>
                    <option value='vn'>Vietnamese</option>
                    <option value='en'>English</option>
                </select>
            </div>
            <button type='submit' onClick={handleSubmit}>
                Pay Now
            </button>
        </div>
    );
}

export default PaymentForm;
