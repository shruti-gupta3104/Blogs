import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContent";
import "./App.css";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Tag from "./pages/Tag";
import Category from "./pages/Category";

export default function App() {

  const {fetchBlogPosts}=useContext(AppContext);
  const [searchParams,setSearchParams ] = useSearchParams();
  const location = useLocation();

  useEffect( ()=>{
    // fetchBlogPosts()
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-","");
      fetchBlogPosts(Number(page),tag);

    }
    else if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1).replaceAll("-","");
      fetchBlogPosts(Number(page),null,category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  
  
  
  
  }, [location.pathname , location.search]);



  return <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path="/blog/:blogId" element= {<BlogPage />} />
      <Route path="/tags/:tag" element= {<Tag />} />
      <Route path="/categories/:category" element= {<Category />} />

    </Routes>
  </div>;
}
