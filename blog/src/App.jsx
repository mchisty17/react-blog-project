import { useState } from 'react'
import './App.css'
import AllBlogs from './components/AllBlogs'
import Bookmark from './components/Bookmark'
import Header from './components/header'

function App() {
 
const [bookmarks,setbookmarks]=useState([])
const [readingtime,settime]=useState(0)


const handlebookmark=blog=>
{
const newbookmarks=[...bookmarks,blog]
setbookmarks(newbookmarks)

}

const addreadingTime=time=>
{
settime(readingtime+time)


}


  return (
    <>
<div className='mx-auto max-w-6xl'>

<Header></Header>
<div className='flex justify-between mt-5'>

<AllBlogs handlebookmark={handlebookmark} addreadingTime={addreadingTime}>




</AllBlogs>


<Bookmark  bookmarks={bookmarks} readingtime={readingtime}></Bookmark>


</div>






</div>



    </>
  )
}

export default App
