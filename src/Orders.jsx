import React, { useEffect, useState } from 'react';
import './cssfiles/orders.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                ));

        } else {
            setOrders([]);
        }

    }, [user])

    return (
        <div className="orders">
            <h2>Your Orders</h2>
            <div className="orders_order">
                {
                    orders?.map(order => (
                        <Order key={order.id} order={order} />
                    ))
                }

            </div>
        </div>
    )
}

export default Orders
