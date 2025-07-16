import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    const{loading,posts} = useContext(AppContext)
  return (
    <div className='w-11/12 h-screen max-w-[670px] py-8 flex flex-col  mt-[285px] mb-[35%] justify-center items-center '>
      {
        loading ? (<Spinner/>): (
            posts.length === 0 ? (<div>
                <p>No Post found</p>
                </div>
                ) : 
                (posts.map((post)=>{
                   
                    return (
                   <BlogDetails key={post.id} post={post}/>
                    )
                }))
        )
      }
    </div>
  )
}

export default Blogs
