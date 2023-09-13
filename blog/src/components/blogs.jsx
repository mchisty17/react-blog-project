import { useEffect, useState } from "react";
import Blog from "./blog";
import PropTypes from 'prop-types';

const Blogs = ({handlebookmark}) => {

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
              blogs.map(blog=><Blog  key={blog.id} blog={blog} handlebookmark={handlebookmark}> </Blog>)
           }
            
        </div>
    );
};

Blogs.propTypes = {
    blog: PropTypes.object.isRequired,
    handlebookmark: PropTypes.func.isRequired
};




export default Blogs;