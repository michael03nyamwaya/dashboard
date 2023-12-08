import Topbar from "./componets/topbar/Topbar";
import Sidebar from "./componets/sidebar/Sidebar";
import Home from "./componets/pages/home/Home";
import UserList from "./componets/pages/userList/UserList";
import User from "./componets/pages/user/User";
import NewUser from "./componets/pages/newUser/NewUser";
import ProductList from "./componets/pages/productList/ProductList";
import Product from "./componets/pages/product/Product";
import './app.css'
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
  <Topbar/>
    <div className="container">
      <Sidebar/>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/user' element={<UserList />} />
      <Route path='/user/:userId' element={< User/>} />
      <Route path='/newUser' element={< NewUser/>} />
      <Route path='/product' element={< ProductList/>} />
      <Route path='/product/:productId' element={< Product/>} />
      <Route path='/newProduct' element={< ProductList/>} />
     
      </Routes>
    </div>
  
</Router>

  );
}

export default App;
