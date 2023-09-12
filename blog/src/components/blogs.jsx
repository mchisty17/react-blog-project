import { useEffect, useState } from "react";
import Blog from "./blog";

const Blogs = () => {

const[blogs,setblogs]=useState([])

useEffect(()=>{
fetch('blogs.json')

.then(res=>res.json())
.then(data=>setblogs(data))
}
,[])
    return (
        <div>
          {
              blogs.map(blog=><Blog  key={blog.id} blog={blog}> </Blog>)
           }
            
        </div>
    );
};

export default Blogs;