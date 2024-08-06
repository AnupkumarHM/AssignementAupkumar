import React from 'react';
import css from './Statistics.module.css';

const RecentOrders = () => {
    const orders = [
        { id: 1, customer: 'Wade Warren', amount: 124.00, status: 'Delivered', img: 'https://img.freepik.com/premium-photo/black-american-female-humanoid-robot-cyborg_63106-1089.jpg?w=2000' },
        { id: 2, customer: 'Jane Cooper', amount: 365.02, status: 'Delivered', img: 'https://img.freepik.com/premium-photo/black-american-female-humanoid-robot-cyborg_63106-1089.jpg?w=2000' },
        { id: 3, customer: 'Guy Hawkins', amount: 45.88, status: 'Cancelled', img: 'https://img.freepik.com/premium-photo/black-american-female-humanoid-robot-cyborg_63106-1089.jpg?w=2000' },
        { id: 4, customer: 'Kristin Watson', amount: 65.00, status: 'Pending', img: 'https://img.freepik.com/premium-photo/black-american-female-humanoid-robot-cyborg_63106-1089.jpg?w=2000' },
        { id: 5, customer: 'Cody Fisher', amount: 545.00, status: 'Delivered', img: 'https://img.freepik.com/premium-photo/black-american-female-humanoid-robot-cyborg_63106-1089.jpg?w=2000' }
    ];

    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.recentOrdersTitle}>Recent Orders</div>
            <div className={css.orderHeaders}>
                        <div>Customer</div>
                        <div>Order ID</div>
                        <div>Amount</div>
                        <div>Status</div>
                    </div>
            <div className={css.recentOrdersContainer}>
                <div className={css.recentOrders}>


                    {orders.map(order => (
                        <div key={order.id} className={css.orderCard}>
                            <div className={css.customer}>
                                <img src={order.img} alt={order.customer} />
                                <span>{order.customer}</span>
                            </div>
                            <div>{order.id}</div>
                            <div>${order.amount.toFixed(2)}</div>
                            <div>
                                <span className={`${css.status} ${css[`status-${order.status.toLowerCase()}`]}`}>
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default RecentOrders;
