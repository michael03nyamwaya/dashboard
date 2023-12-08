import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import {Link} from 'react-router-dom'






export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <LineStyleIcon className='siderIcons'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className='siderIcons'/>
                        Analytic
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='siderIcons'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to='./user' className='link'>
                    <li className="sidebarListItem ">
                        <PermIdentityIcon className='siderIcons'/>
                        Users
                    </li>
                    </Link>
                    <Link to='./product' className='link'>
                    <li className="sidebarListItem">
                        <Inventory2OutlinedIcon className='siderIcons'/>
                        Products
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className='siderIcons'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentOutlinedIcon className='siderIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        < MailOutlineIcon className='siderIcons'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className='siderIcons'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon className='siderIcons'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <WorkOutlineIcon className='siderIcons'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon  className='siderIcons'/>
                        Analytic
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon className='siderIcons'/>
                        Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
