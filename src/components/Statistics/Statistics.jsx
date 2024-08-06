import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import RecentOrders from './RecentOrders'


const Statistics = () => {
    return (
        <div>
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>    Activity</span>        <div className={css.durationButton}>
                <select>
                  <option value="">1 week</option>
                  <option value="">1 month</option>
                  <option value="">1 year</option>
                </select>
              </div>
            <StatisticsChart/>
            
        </div>

        </div>
    )
}

export default Statistics