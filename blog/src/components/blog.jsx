import PropTypes from 'prop-types';
const Blog = ({ blog }) => {

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
                    <h2 className='mt-10'>{reading_time}minutes</h2>
                    <button><img className='ml-2 text-black' src="../assets/images/bookmark_5114686.png" alt="" />
                         Add To Bookmark
                  </button>

                </div>
            </div>


        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired

}

export default Blog;