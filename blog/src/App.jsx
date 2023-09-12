import './App.css'
import AllBlogs from './components/AllBlogs'
import Bookmark from './components/Bookmark'
import Header from './components/header'

function App() {

  return (
    <>
<Header></Header>
<div className='flex justify-between mt-5'>

<AllBlogs></AllBlogs>
<Bookmark></Bookmark>


</div>
    </>
  )
}

export default App
