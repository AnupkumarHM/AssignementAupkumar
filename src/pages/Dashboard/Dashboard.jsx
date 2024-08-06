import React from 'react';
import css from './Dashboard.module.css';
import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Statistics/Statistics';
import RecentOrders from '../../components/Statistics/RecentOrders';
import { cardsData, groupNumber } from '../../data';
import { TiArrowSortedUp } from "react-icons/ti";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaFunnelDollar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.leftContainer}>
          {/* Dashboard Section */}
          <div className={css.dashboard}>
            <div className={css.head}>
              <span>Dashboard</span>
            </div>
            <div className={css.cards}>
              {cardsData.map((card, index) => (
                <div className={`${css.dashboardHead} theme-container`} key={index}>
                  <div className={css.card}>
                    <div className={css.cardIcon}>
                      {card.title === "Total Revenue" && <FaFunnelDollar size={30} color="skyblue" />}
                      {card.title === "Total Orders" && <FaShoppingBasket size={30} color="skyblue" />}
                      {card.title === "Total Delivered" && <MdOutlineShoppingBag size={30} color="green" />}
                      {card.title === "Total Cancelled" && <MdOutlineShoppingBag size={30} color="red" />}
                    </div>
                    <div className={css.cardHead}>
                      <span>{card.title}</span>
                    </div>
                    <div className={css.cardAmountChange}>
                      <div className={css.cardAmount}>
                        {card.showDollar ? (
                          <>
                            <span>$</span>
                            <span>{groupNumber(card.amount)}</span>
                          </>
                        ) : (
                          <span>{groupNumber(card.amount)}</span>
                        )}
                      </div>
                      <div className={css.cardChange}>
                        {card.change >= 0 ? (
                          <>
                            <TiArrowSortedUp size={20} color="green" /> {/* Up arrow for positive change */}
                            <span>{card.change}</span>
                          </>
                        ) : (
                          <>
                            <TiArrowSortedUp size={20} color="red" style={{ transform: 'rotate(180deg)' }} /> {/* Down arrow for negative change */}
                            <span>{card.change}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Statistics Section */}
          <div className={css.statisticsContainer}>
            <Statistics />
          </div>
          <div className={css.recentOrdersContainer}>
            <RecentOrders />
          </div>
        </div>
        
        {/* Orders Section */}
        
          <Orders />
        
      </div>
    </>
  );
};

export default Dashboard;
