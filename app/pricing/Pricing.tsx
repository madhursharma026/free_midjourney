"use client"
import YearlyPlan from "./YearlyPlan";
import MonthlyPlan from "./MonthlyPlan";
import React, { useState } from "react";
import Container from "../components/Ui/Container";
import PageHeader from "../components/layout/PageHeader";

const Pricing = () => {
    const [activeTabs, setActiveTabs] = useState(1);

    return (
        <main className="pricing-plan">
            <PageHeader title="Pricing" />
            <Container>
                <div className="pt-28 pb-10 text-center justify-center">
                    <div className="text-center mb-10">
                        <h3 className="heading pb-6">our pricing plan</h3>
                        <p className="text">AI image generators, often referred to as generative models or generative adversarial network are AI systems that can generate.</p>
                    </div>
                    <div className="row p-3 mb-4 border rounded" style={{ maxWidth: '450px', margin: 'auto' }}>
                        <div className={`col-6 fs-4 py-2 px-5 ${activeTabs === 1 ? 'border' : ''} rounded`} style={{ background: `${activeTabs === 1 ? '#FBFBFB' : ''}`, cursor: 'pointer' }} onClick={() => setActiveTabs(1)}>
                            Monthly
                        </div>
                        <div className={`col-6 fs-4 py-2 px-5 ${activeTabs === 2 ? 'border' : ''} rounded`} style={{ background: `${activeTabs === 2 ? '#FBFBFB' : ''}`, cursor: 'pointer' }} onClick={() => setActiveTabs(2)}>
                            Yearly
                        </div>
                    </div>
                    {activeTabs === 1 ?
                        <MonthlyPlan />
                        :
                        <YearlyPlan />
                    }
                </div>
                <div className="text-center pb-28">
                    <small className="text text-sm">Note: We're pleased to inform you that we currently accept PayPal transactions.</small>
                </div>
            </Container>
        </main >
    )
};

export default Pricing;

