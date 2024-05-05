
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import useAuth from "../common/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const creditsPerUnit = +process.env.NEXT_PUBLIC_CREDITS_PER_UNIT;

const ButtonWrapper = ({ type }) => {
    const [{ options }, dispatch] = usePayPalScriptReducer();
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                intent: "subscription",
            },
        });
    }, [type]);
    return (<PayPalButtons
        createSubscription={(data, actions) => {
            return actions.subscription
                .create({
                    plan_id: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID,
                })
                .then((orderId) => {
                    return orderId;
                });
        }}
        style={{
            label: "subscribe",
        }}
    />);
}
export default function MonthlyPlan() {
    const [customPrice, setcustomPrice] = useState(10);
    const { isLoggedIn } = useAuth();
    const inputStyle = {
        width: `calc(${customPrice.toString().length}ch)`,
    };
    return (
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, components: "buttons", intent: "subscription", vault: true }}>
            <div className="grid grid-cols-3 gap-4 mt-4">

                <div className="bg-gray-50 pb-12 rounded-xl">
                    <div className="bg-dark p-8 relative font-Mona_Bold rounded-lg">
                        <span className="mb-4 capitalize block text-white text-2xl font-Mona_Medium">Free</span>
                        <div className="flex items-end space-x-2 justify-center">
                            <h2 className="heading text-white font-Mona_Regular">$0.00</h2>
                            <p className="text-base inline-block text-white capitalize">/ {1 * creditsPerUnit} Credit</p>
                        </div>
                    </div>
                    <ul className="p-8 space-y-3">
                        <li className="flex items-center justify-between">
                            <span className="text">Max Image Resolution: 1024x1024</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Custom Images Per Request</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Fast Processing Generations</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Commercial License</span>
                            <FaCheck />
                        </li>
                    </ul>

                    {isLoggedIn ? (
                        <div className="px-4">
                            {/* <ButtonWrapper type="subscription" /> */}
                            <button type="button" className="btn p-2" style={{ background: '#FFCA2C', width: '100%' }}><b>BUY</b></button>
                        </div>
                    ) : (
                        <div className="flex justify-center"><Link href="/auth/signin" className="pq-button-flat w-fit">Login Now</Link></div>
                    )}

                </div>
                <div className="bg-gray-50 pb-12 rounded-xl">
                    <div className="bg-dark p-8 relative font-Mona_Bold rounded-lg">
                        <span className="mb-4 capitalize block text-white text-2xl font-Mona_Medium">Basic</span>
                        <div className="flex items-end space-x-2 justify-center">
                            <h2 className="heading text-white font-Mona_Regular">$5.00</h2>
                            <p className="text-base inline-block text-white capitalize">/ {5 * creditsPerUnit} Credit</p>
                        </div>
                    </div>

                    <ul className="p-8 space-y-3">
                        <li className="flex items-center justify-between">
                            <span className="text">Max Image Resolution: 1024x1024</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Custom Images Per Request</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Fast Processing Generations</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Commercial License</span>
                            <FaCheck />
                        </li>
                    </ul>

                    {isLoggedIn ? (
                        <div className="px-4">
                            <ButtonWrapper type="subscription" />
                        </div>
                    ) : (
                        <div className="flex justify-center"><Link href="/auth/signin" className="pq-button-flat w-fit">Login Now</Link></div>
                    )}
                </div>

                <div className="bg-gray-50 pb-12 rounded-xl">
                    <div className="bg-gradient-to-r from-[#6c88ef] to-[#7462ffed] p-8 relative font-Mona_Bold rounded-lg">
                        <span className="mb-4 capitalize block text-white text-2xl font-Mona_Medium">Creative</span>
                        <div className="flex items-end space-x-2 justify-center">
                            <h2 className="heading text-white font-Mona_Regular">$8.00</h2>
                            <p className="text-base inline-block text-white capitalize">/ {8 * creditsPerUnit} Credit</p>
                        </div>
                    </div>

                    <ul className="p-8 space-y-3">
                        <li className="flex items-center justify-between">
                            <span className="text">Max Image Resolution: 1024x1024</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Custom Images Per Request</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Fast Processing Generations</span>
                            <FaCheck />
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text">Commercial License</span>
                            <FaCheck />
                        </li>
                    </ul>

                    {isLoggedIn ? (
                        <div className="px-4">
                            <ButtonWrapper type="subscription" />
                        </div>
                    ) : (
                        <div className="flex justify-center"><Link href="/auth/signin" className="pq-button-flat w-fit">Login Now</Link></div>
                    )}
                </div>
            </div>
        </PayPalScriptProvider>
    );
}

