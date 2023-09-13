import Blogs from "./blogs";
import PropTypes from 'prop-types';

const AllBlogs = ({handlebookmark,addreadingTime}) => {
    return (
        <div>
            <h1 className="md:w-2/3 text-2xl">Blogs</h1>
            <Blogs handlebookmark={handlebookmark} addreadingTime={addreadingTime}></Blogs>


        </div>
    );
};


AllBlogs.propTypes = {
    handlebookmark: PropTypes.func.isRequired,
    addreadingTime: PropTypes.func.isRequired

};

export default AllBlogs;