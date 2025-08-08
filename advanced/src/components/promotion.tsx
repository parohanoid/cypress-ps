'use client';

import { useState } from "react";

interface isLoading {
    loading: boolean;
    failed: boolean;
    success: boolean;
}

const CLICK_HERE = "Click here for a personal discount code";

interface PromotionResponse {
    discountCode: string;
}

export default function Jumbotron() {
    const [isLoadingDiscountcode, setIsLoadingDiscountCode] = useState<isLoading>({ loading: false, failed: false, success: false });
    const [discountText, setDiscountText] = useState<string>(CLICK_HERE);
    const [discountCode, setDiscountCode] = useState<string | null>(null);

    async function getDiscountCode(): Promise<void> {
        setIsLoadingDiscountCode({ loading: true, failed: false, success: false });
        setDiscountText("Loading...");
        setDiscountCode(null);

        try {
            const response = await fetch('/api/promotions');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: PromotionResponse = await response.json();

            setDiscountCode(data.discountCode);
            setIsLoadingDiscountCode({ loading: false, failed: false, success: true });

        } catch (error: any) {
            console.error("Failed to fetch discount code:", error);
            setDiscountText("Your code: Failed to get code. Try again."); // Modified error text
            setIsLoadingDiscountCode({ loading: false, failed: true, success: false });
            setDiscountCode(null);
        }
    }

    return (
        <div className="jumbotron jumbotron-fluid crf-hero d-flex">
            <div className="container d-flex flex-column justify-content-center align-items-sm-stretch align-items-md-center">
                <h1 className="col-sm-12">GET A GRIP</h1>
                <h2>20% OFF</h2>
                <p className="lead">THROUGHOUT THE SEASON</p>

                {discountCode ? (
                    <input
                        type="text"
                        data-testid="promo-code"
                        className="btn btn-default"
                        value={`Your code: ${discountCode}`} // Modified input value
                        readOnly
                    />
                ) : (
                    <button
                        className="btn btn-default"
                        data-testid="get-promo-code"
                        onClick={() => getDiscountCode()}
                        disabled={isLoadingDiscountcode.loading}
                    >
                        {isLoadingDiscountcode.loading ? discountText : discountText}
                    </button>
                )}

            </div>
        </div>
    );
}