import React from 'react'
import Header from '../components/Header'
import {  useLocation, useNavigate} from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const Tag = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className='mt-[80px] mb-0'>
        <button onClick={()=> navigation(-1)} className='bg-blue-500 text-white px-4 py-2 rounded float-right'>
            back
        </button>
        <h2>
            Blogs Tagged <span>#{tag}</span>
        </h2>
      </div> 
      <Blogs />
      <Pagination />
    </div>
  )
}

export default Tag
