import css from './Orders.module.css'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import React from 'react';
import { TiArrowRight } from 'react-icons/ti';
import { CiBurger } from "react-icons/ci";
import { ImTarget } from "react-icons/im";
import { CgCap } from "react-icons/cg";

const Orders = () => {
    const netProfit = 6759.25;
    const completionPercentage = 70;
    const changePercentage = 3;
    const customerFeedback = [
        {
            name: 'Jenny Wilson',
            rating: 5,
            feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
            image: 'https://th.bing.com/th?id=OIP.bpUQwIuw3wxkVQIA_oxAjwHaEg&w=320&h=195&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' // Add image path
        },
        {
            name: 'Dianne Russell',
            rating: 3.5,
            feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
            image: 'https://th.bing.com/th?id=OIP.pIn3H5f-R3Akfj_NkbA8hAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' // Add image path
        },
        {
            name: 'Devon Lane',
            rating: 4.5,
            feedback: 'Normally wings are wings, but theirs are lean meaty and tender and...',
            image: 'https://th.bing.com/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' // Add image path
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '★'.repeat(fullStars); 
        if (fullStars < 5) {
            stars += '☆'.repeat(5 - fullStars);
        }
        return { __html: stars };
    };

    return (
        <div className={css.container}>
            {/* Net Profit Section */}
            <div className={css.netProfit}>
                <div className={css.amountContainer}>
                    <span className={css.amount}>${netProfit.toFixed(2)}</span>
                    <div className={css.change}>
                        {changePercentage > 0 ? (
                            <>
                                <TiArrowSortedUp size={20} color="lightgreen" />
                                <span className={css.changeText}>{changePercentage}%</span>
                            </>
                        ) : (
                            <>
                                <TiArrowSortedDown size={20} color="red" />
                                <span className={css.changeText}>{Math.abs(changePercentage)}%</span>
                            </>
                        )}
                    </div>
                </div>
                <div className={css.completion}>
                    <svg className={css.progressCircle} viewBox="0 0 36 36">
                        <path
                            className={css.circleBg}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className={css.circle}
                            strokeDasharray={`${completionPercentage}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className={css.percentage}>{completionPercentage}%</text>
                    </svg>
                </div>
            </div>

            {/* Options Section */}
            <div className={css.options}>
                <div className={css.option}>
                    <ImTarget size={30} color="lightgreen"/>
                    <span className={css.optionText}>Goals</span>
                    <TiArrowRight className={css.arrow} />
                </div>
                <div className={css.option}>
                    <CiBurger size={30} color="lightgreen"/>
                    <span className={css.optionText}>Popular Dishes</span>
                    <TiArrowRight className={css.arrow} />
                </div>
                <div className={css.option}>
                    <CgCap size={30} color="lightgreen"/>
                    <span className={css.optionText}>Menus</span>
                    <TiArrowRight className={css.arrow} />
                </div>
            </div>

            {/* Customer Feedback Section */}
            <div className={css.feedback}>
                <h2>Customer's Feedback</h2>
                {customerFeedback.map((feedback, index) => (
                    <div key={index} className={css.feedbackItem}>
                        <img src={feedback.image} alt={feedback.name} className={css.feedbackImage} />
                        <div className={css.feedbackContent}>
                            <div className={css.feedbackHeader}>
                                <span className={css.feedbackName}>{feedback.name}</span>
                                <span
                                    className={css.feedbackRating}
                                    dangerouslySetInnerHTML={renderStars(feedback.rating)}
                                />
                            </div>
                            <p className={css.feedbackText}>{feedback.feedback}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
