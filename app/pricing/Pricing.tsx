"use client"
import Link from "next/link";
import Image from "next/image";
import Confetti from "react-confetti";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Check from "@/assets/images/check.gif";
import useAuth from "../common/hooks/useAuth";
import Container from "../components/Ui/Container";
import { PayPalButton } from "react-paypal-button-v2";
import PageHeader from "../components/layout/PageHeader";
import YearlyPlan from "./YearlyPlan";

const Pricing = () => {
    const { isLoggedIn } = useAuth();
    const [customPrice, setcustomPrice] = useState(10);
    const [doneNotify, setDoneNotify] = useState(false);
    const creditsPerUnit = +process.env.NEXT_PUBLIC_CREDITS_PER_UNIT;
    const inputStyle = { width: `calc(${customPrice.toString().length}ch)` };

    return (
        <main className="pricing-plan">
            <PageHeader title="Pricing" />
            <Container>
                <div className="pt-28 pb-10 text-center justify-center">
                    <div className="text-center mb-10">
                        <h3 className="heading pb-6">our pricing plan</h3>
                        <p className="text">AI image generators, often referred to as generative models or generative adversarial network are AI systems that can generate.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 pb-12 rounded-xl">
                            <div className="bg-dark p-8 relative font-Mona_Bold rounded-lg">
                                <span className="mb-4 capitalize block text-white text-2xl font-Mona_Medium">Yearly Plan</span>
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
                                <div className="px-3">
                                    <PayPalButton amount={process.env.NEXT_PUBLIC_PAYPAL_YEARLY_PLAN_PRICE} onSuccess={(details) => alert("Payment Successfully, OrderId: " + details.id)} />
                                </div>
                            ) : (
                                <div className="flex justify-center"><Link href="/auth/signin" className="pq-button-flat w-fit">Login Now</Link></div>
                            )}
                        </div>
                        <div className="bg-gray-50 pb-12 rounded-xl">
                            <div className="bg-gradient-to-r from-[#6c88ef] to-[#7462ffed] p-8 relative font-Mona_Bold rounded-lg">
                                <span className="mb-4 capitalize block text-white text-2xl font-Mona_Medium">Monthly Plan</span>
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
                                <div className="px-3">
                                    <div className="px-3">
                                        {/* <PayPalButton amount={process.env.NEXT_PUBLIC_PAYPAL_YEARLY_PLAN_PRICE} onSuccess={(details) => alert("Payment Successfully, OrderId: " + details.id)} /> */}
                                        <YearlyPlan />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-center"><Link href="/auth/signin" className="pq-button-flat w-fit">Login Now</Link></div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="text-center pb-28">
                    <small className="text text-sm">Note: We're pleased to inform you that we currently accept PayPal transactions.</small>
                </div>
            </Container>
            {doneNotify && <div className="max-w-xl rounded-2xl border border-blue-100 bg-white py-4 shadow-lg sm:p-6 lg:p-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50" role="alert">
                <div className="text-center">
                    <Image className="mx-auto" src={Check} alt="check" />
                    <h2 className="text-5xl font-Mona_EB text-green-600 mb-6">Congratulations!</h2>
                    <p className="mb-6 text">Your payment was successful. Enjoy your enhanced creativity with the added credits on our AI images generator!"</p>
                    <small className="text-green-700 font-Mona_Bold text-base">+ {customPrice * creditsPerUnit} credits</small>
                    <button onClick={() => setDoneNotify(false)} className="pq-button-flat bg-none bg-green-600 hover:bg-green-700 w-full mt-6">Thank You :)</button>
                </div>
            </div>}
            {doneNotify && <Confetti style={{ zIndex: 9999 }} height={2000} />}
        </main>
    )
};

export default Pricing;

