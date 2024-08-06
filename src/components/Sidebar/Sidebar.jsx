import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import {AiFillCalendar, AiOutlineTable, AiFillHome, AiOutlineShoppingCart, AiOutlineLineChart } from "react-icons/ai";
import { FaTasks ,FaWallet } from "react-icons/fa";
import { HiOutlineChartSquareBar} from "react-icons/hi";
// import { TiArrowSortedUp } from "react-icons/ti";
// import { FaBasketShopping } from "react-icons/fa6";
import { BsBagCheck } from "react-icons/bs";
// import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className={css.container}>

            <img src="./logo.png" alt="logo" className={css.logo} />


            <div className={css.menu}>
                <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                <AiFillHome size={30} />
                </NavLink>
                
                <NavLink
                    to="calendar"
                    className={css.item}
                    title="Calendar"
                >
                    <HiOutlineChartSquareBar  size={35} />
                </NavLink>

                <NavLink
                    to="board"
                    className={css.item}
                    title="Trello Board"
                >
                    <FaWallet  size={30} />
                </NavLink>

                <NavLink
                    to="users"
                    className={css.item}
                    title="Users"
                >
                    <BsBagCheck size={30} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar