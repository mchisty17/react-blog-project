import { useState } from "react";

const blogs = () => {

const[blogs,setblogs]=useState([])

fetch('blogs.json')

.then(res=>res.json())
.then(data=>setblogs(data))

    return (
        <div>
          {

           }
            
        </div>
    );
};

export default blogs;