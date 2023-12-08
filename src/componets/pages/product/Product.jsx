import './product.css'
import {Link} from 'react-router-dom'
import Chart from '../../chart/Chart'
import {productData} from '../../../dummy Data'
import PublishIcon from '@mui/icons-material/Publish';


export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h2 className="productTitle">Product</h2>
            <Link to='/newProduct'>
            <button className="productAddButton">create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey={'sales'} title={'Sales Perforamnce'}/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="../assert/pic2.jpg" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">456</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">4456</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type='text' placeholder='Apple Airpod'/>
                    <label>In Stock</label>
                    <select  name='inStock' id='inStock'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                    <label>Active</label>
                    <select  name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="../assert/pic.jpg" alt="" className="productUploadImg" />
                        <label for='file'>
                            <PublishIcon/>
                        </label>
                        <input type='file' id='file' style={{display:'none'}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
