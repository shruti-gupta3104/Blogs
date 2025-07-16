import  { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContent';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
const BlogPage = () => {
    const newUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog,setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog ] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading,setLoading} =useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);


    async function fetchRelatedBlogs(){
        setLoading(true);
     let url = `${newUrl}/get-blog?blogId=${blogId}`;
     console.log("URL is",url);
     try{
        const res = await fetch(url);
        const data = await res.json();
        setBlog(data.blog);
        setRelatedBlog(data.relatedBlog);

     }
     catch(error){
        console.log("Eror",error);
        setBlog(null);
        setRelatedBlog([])
     }
setLoading(false);

    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname,blogId])
  return (
    <div>
      <Header />
      <div >
        <button 
        onClick={()=>{
            navigation(-1)
        }}
        >Back</button>
      </div>
      {
      loading ? (<p>Loading</p>) :
      blog ? (<div><BlogDetails post ={blog}/>
        <h2>Related Blogs</h2>{
            relatedBlog.map((post)=>(<BlogDetails post={post} key={post.id}/>))
        }
        </div>
      )

      :(<p> No blog found</p>)}
    </div>
  )
}

export default BlogPage
