import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='pb-4'>
      <NavLink to={`/blog/${post.id}`} >{post.title}
      </NavLink>
             
                        {/* <p className=' font-bold text-lg' ></p> */}
                        <p className='text-sm mt-[3px]'>By <NavLink to={`/categories/${post.category.replaceAll("","-")}`}><span className='italic'>{post.author}</span> on <span>{post.category}</span></NavLink></p>
                        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                        <p className='text-md mt-[14px]'>{post.content}</p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag,index)=>{
                                return <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}  key={index} >
                                  <span className='text-blue-500 underline font-bold text-xs mt-[4px]'>{`#${tag}`}
                                  </span>
                                  </NavLink>
                            })}
                        </div>
                    </div>
      
    
  )
}

export default BlogDetails
