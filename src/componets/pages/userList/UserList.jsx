import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../../dummy Data';
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function DataTable() {
  const[data,setData]=useState(userRows)
  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id !==id))
  }
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'user', width: 200, renderCell:(params)=>{
    return(
      <div className="userList">
        <img className='userListImg' src={params.row.avatar} alt=''/>
        {params.row.userName}
      </div>
    )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transactions ',
    width: 150, 
  },
  {
    field: 'action',
    headerName: 'Action ',
    width: 150, 
    renderCell:(params)=>{
      return(
        <>
        <Link to={'/user'+params.row.id}>
        <button className="userListEdit">Edit</button>
        </Link>
        <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
        </>

      )
    }
  },

];



  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 14]}
        checkboxSelection
      />
    </div>
  );
}