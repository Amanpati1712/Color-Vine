import React from 'react'
import './Admin.css'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../component/addproduct/Addproduct'
import Listproduct from '../../component/listproduct/Listproduct'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<Listproduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin
