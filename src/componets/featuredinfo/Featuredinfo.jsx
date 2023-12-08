import './featuredinfo.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default function Featuredinfo() {
  return (
   <div className="featured">
    <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,464</span>
            <span className="featuredMoneyRate">-11.4
            <ArrowDownwardOutlinedIcon className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,464</span>
            <span className="featuredMoneyRate">-1.4
            <ArrowDownwardOutlinedIcon className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,224</span>
            <span className="featuredMoneyRate">+2.4
            <ArrowUpwardOutlinedIcon className='featuredIcon'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>
   </div>
  )
}
