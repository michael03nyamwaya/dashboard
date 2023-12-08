import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from 'react-router-dom'

export default function User() {
  return (
    <div className="user">
       <div className="userTitleContainer">
        <h2 className="userTitle">Edit User</h2>
        <Link to='/newUser'>
         <button className="userAddButton">Create</button>
        </Link>
       </div>
       <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="../assert/pic.jpg" alt="" className="userShowImg" />
                <div className="userShowTitle">
                    <span className="userShowUserName">Becker</span>
                    <span className="userShowUserTilte">Data Analyst</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                   <PermIdentityIcon className='usherShowIcon'/>
                    <span className="userShowInfoTitle">becker55</span>
                </div>
                <div className="userShowInfo">
                   <CalendarTodayIcon className='usherShowIcon'/>
                    <span className="userShowInfoTitle">24.10.2023</span>
                </div>
                <span className="userShowTitle">Contacts Details</span>
                <div className="userShowInfo">
                   <PhoneAndroidIcon className='usherShowIcon'/>
                    <span className="userShowInfoTitle">+254725074230</span>
                </div>
                <div className="userShowInfo">
                   <MailOutlineIcon className='usherShowIcon'/>
                    <span className="userShowInfoTitle">becker55@gmail.com</span>
                </div>
               
                <div className="userShowInfo">
                   <LocationSearchingIcon className='usherShowIcon'/>
                    <span className="userShowInfoTitle">Nairobi Kenya</span>
                </div>
            </div>
        </div>
        
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
             <form  className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>username</label>
                        <input type='text' placeholder='becker55' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type='text' placeholder='Becker' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type='text' placeholder='becker55@gmail.com' className='userUpdateInput'/>
                    </div>
                  
                    <div className="userUpdateItem">
                        <label>Phone No</label>
                        <input type='text' placeholder='0725074230' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Date</label>
                        <input type='text' placeholder='24.10.2023' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Location</label>
                        <input type='text' placeholder='Nairobi Kenya' className='userUpdateInput'/>
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="../assert/pic.jpg" alt="" className="userUpdateImg" />
                        <label htmlFor='file'><PublishIcon className='userUpdateIcon'/></label>
                        <input type='file' id='file' style={{display:'none'}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
             </form>
        </div>
       </div>
    </div>
  )
}
