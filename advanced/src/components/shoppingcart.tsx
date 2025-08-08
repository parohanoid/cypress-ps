'use client'
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
    const isLoggedIn = useSelector((state: RootState) => state.user?.username);
    const cart = useSelector((state: RootState) => state.cart);

    const cartContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const circleStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: '#4CAF50',
        borderRadius: '50%',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '4px',
    };

    const textStyle = {
        fontSize: '0.8em',
        color: '#555',
    };

    return (
        <>
            {isLoggedIn ? (
                <Link href={`/cart`} style={{ textDecoration: 'none' }}>
                    <div style={cartContainerStyle}>
                        <div style={circleStyle}>{cart.items.length}</div>
                        <div style={textStyle}>Cart</div>
                    </div>
                </Link>
            ) : null}
        </>
    );
}