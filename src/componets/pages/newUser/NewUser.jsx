import './newUser.css'

export default function NewUser() {
  return (
    <div className="newUser">
        <h2 className="newUserTitle"></h2>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type='text' placeholder='Sagwe'/>
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input type='text' placeholder='Sagwe mike'/>
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type='text' placeholder='Sagwe@gmail.com'/>
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type='text' placeholder='password'/>
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type='text' placeholder='+25456778856'/>
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type='text' placeholder='Nairobi Kenya'/>
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
            <input type='radio'name='gender' id='male' value='male'/>
            <label for='male'>Male</label>
            <input type='radio'name='gender' id='female' value='female'/>
            <label for='female'>Female</label>
            <input type='radio'name='gender' id='others' value='others'/>
            <label for='othes'> Others</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option>Yes</option>
              <option>No</option>
            </select>
            <button className="newUserButton">Create</button>
          </div>
        </form>
    </div>
  )
}
