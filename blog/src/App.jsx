import { useState } from 'react'
import './App.css'
import AllBlogs from './components/AllBlogs'
import Bookmark from './components/Bookmark'
import Header from './components/header'

function App() {
 
const [bookmarks,setbookmarks]=useState([])


const handlebookmark=blog=>
{
const newbookmarks=[...bookmarks,blog]
setbookmarks(newbookmarks)

}


  return (
    <>
<div className='mx-auto max-w-6xl'>

<Header></Header>
<div className='flex justify-between mt-5'>

<AllBlogs handlebookmark={handlebookmark}>




</AllBlogs>


<Bookmark  bookmarks={bookmarks}></Bookmark>


</div>






</div>



    </>
  )
}

export default App
