import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const Category = () => {
const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className='mt-[80px]'>
        <button onClick={()=> navigation(-1)} className='bg-blue-500 text-white px-4 py-2 rounded float-right'>
            back
        </button>
        <h2>
            Blogs Category <span>#{category.replaceAll("-","")}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default Category
