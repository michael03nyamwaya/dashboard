import './home.css'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
import Chart from '../../chart/Chart'
import { userData } from '../../../dummy Data'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'

export default function Home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={userData}
         title='User Analytics' 
         dataKey='uv'
         grid />
         <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>

         </div>
    </div>
  )
}
