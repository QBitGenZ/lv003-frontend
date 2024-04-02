import React, { useState } from "react";

function PaymentForm() {
    const [amount, setAmount] = useState(0);
    const [bankCode, setBankCode] = useState("");
    const [language, setLanguage] = useState("vn");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const paymentData = {
            amount: amount,
            bankCode: bankCode,
            language: language,
        };

        try {
            const response = await fetch(
                `${process.env.REACT_APP_IP}/v1/payment/create_payment_url`,
                {
                    method: "POST",
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(paymentData),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Redirect to the payment URL received from the backend
                window.location.href = data.paymentUrl;
            } else {
                console.error("Failed to create payment URL");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type='submit'>Pay Now</button>
        </form>
    );
}

export default PaymentForm;
