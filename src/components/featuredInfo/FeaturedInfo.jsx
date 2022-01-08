import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className='featuredTitle'>Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> $2,419</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className='featuredTitle'>Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> $4,419</span>
                    <span className="featuredMoneyRate">- 1.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className='featuredTitle'>Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> $2,210</span>
                    <span className="featuredMoneyRate">+ 8.3 <ArrowUpward className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo;