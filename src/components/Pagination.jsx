import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'

const Pagination = () => {
    const {page,handlePage, totalPages} = useContext(AppContext);
  return (
    <div  className=' md:w-[50%] flex justify-center items-center border-2 fixed bottom-0 bg-white mt-[50px]'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2 '>
      <div className='flex gap-x-2'>
        {
            page > 1 && 
            <button 
            className='rounded-md border px-4 py-1'
            onClick={()=>handlePage(page-1)}>Previous</button>
        }
        {
            page< totalPages && <button className='rounded-md border px-4 py-1' onClick={()=> handlePage(page+1)}>Next</button>
        }
      </div>
        
        <p>
            Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
