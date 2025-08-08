'use client'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { increaseItem, decreaseItem, removeItem } from '@/lib/cartSlice';

interface CartItem {
    id: string;
    name: string;
    price: number;
    amount: number;
}

export default function ShoppingCartPage() {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const isLoggedIn = useSelector((state: RootState) => state.user?.username);

    const handleIncrease = (itemId: string) => {
        dispatch(increaseItem(itemId));
    };

    const handleDecrease = (itemId: string) => {
        dispatch(decreaseItem(itemId));
    };

    const handleRemove = (itemId: string) => {
        dispatch(removeItem(itemId));
    };

    const calculateTotalPrice = () => {
        return cart.items.reduce((total, item) => total + item.price * item.amount, 0);
    };

    const totalPrice = calculateTotalPrice();

    const tableHeaderStyle = {
        padding: '12px',
        textAlign: 'left',
        borderBottom: '2px solid #ccc',
    };

    const tableCellStyle = {
        padding: '12px',
        textAlign: 'left',
    };

    const actionButtonStyle = {
        padding: '5px 10px',
        margin: '0 5px',
        cursor: 'pointer',
    };

    const removeButtonStyle = {
        padding: '5px 10px',
        cursor: 'pointer',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    };

    const tableFooterStyle = {
        padding: '12px',
        textAlign: 'right',
        borderTop: '2px solid #ccc',
    };

    return (
        <div style={{ paddingLeft: '171px', paddingRight: '171px', paddingTop: '40px', paddingBottom: '40px' }}>
            {isLoggedIn ? (
                <>
                    {cart.items.length > 0 ? (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f2f2f2' }}>
                                    <th style={tableHeaderStyle}>Item Name</th>
                                    <th style={tableHeaderStyle}>Price</th>
                                    <th style={tableHeaderStyle}>Quantity</th>
                                    <th style={tableHeaderStyle}>Subtotal</th>
                                    <th style={tableHeaderStyle}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.items.map((item: CartItem, index) => (
                                    <tr
                                        key={item.id}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9',
                                            borderBottom: '1px solid #ddd',
                                        }}
                                    >
                                        <td style={tableCellStyle}>{item.name}</td>
                                        <td style={tableCellStyle}>${item.price.toFixed(2)}</td>
                                        <td style={tableCellStyle}>
                                            <button onClick={() => handleDecrease(item.id)} style={actionButtonStyle}>-</button>
                                            <span style={{ margin: '0 8px' }}>{item.amount}</span>
                                            <button onClick={() => handleIncrease(item.id)} style={actionButtonStyle}>+</button>
                                        </td>
                                        <td style={tableCellStyle}>${(item.price * item.amount).toFixed(2)}</td>
                                        <td style={tableCellStyle}>
                                            <button onClick={() => handleRemove(item.id)} style={removeButtonStyle}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
                                    <td style={tableFooterStyle} colSpan={3}>Total</td>
                                    <td style={tableFooterStyle}>${totalPrice.toFixed(2)}</td>
                                    <td style={tableFooterStyle}>&nbsp;</td>
                                </tr>
                            </tfoot>
                        </table>
                    ) : (
                        <p style={{ height: "500px" }}>There are no items in your cart. Take a look at our selection.</p>
                    )}
                </>
            ) : (
                <p>You are not logged in! Log in first to see the items in your cart.</p>
            )}
        </div>
    );
}