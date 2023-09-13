import PropTypes from 'prop-types';
const Blog = ({ blog,handlebookmark,addreadingTime }) => {

    const { title, author, cover, posted_date, reading_time } = blog
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-semibold mb-2'>Title:{title}</h1>
            <div className=''>  <img className=' w-full h-[300px]' src={cover} alt="" /></div>
            <div className='border-b-3'></div>


            <div className='flex justify-between'>
                <div className=''>
                    <h1 className='mt-10 text-2xl'>Author:{author}</h1>
                    <h1 className='mt-2 text-xl'>{posted_date}</h1>


                </div>
                <div className='flex items-center '>
                    <h2 className=''>{reading_time}minutes</h2>
                    <button className='ml-3 btn btn-primary' onClick={()=>handlebookmark(blog)}>
                         Add To Bookmark
                  </button>
               
                </div>
            </div>

          <button className='text-2xl font-bold text-purple-600 underline' onClick={()=>addreadingTime(reading_time)}>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handlebookmark: PropTypes.func.isRequired,
    addreadingTime: PropTypes.func.isRequired,
};


export default Blog;