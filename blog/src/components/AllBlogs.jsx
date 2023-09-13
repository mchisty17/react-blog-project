import Blogs from "./blogs";
const AllBlogs = ({handlebookmark}) => {
    return (
        <div>
            <h1 className="md:w-2/3 text-2xl">Blogs</h1>
            <Blogs handlebookmark={handlebookmark}></Blogs>


        </div>
    );
};

export default AllBlogs;