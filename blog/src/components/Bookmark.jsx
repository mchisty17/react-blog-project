import Addbook from "./addbook";
import PropTypes from 'prop-types';

const Bookmark = ({bookmarks,readingtime}) => {
    return (
       <div>
          <div>Total Reading Time : {readingtime}</div>

         <div>
            <h1 className="md:w-1/3 text-2xl">Bookmarks</h1>
        
        </div>
    <div>
     {
      bookmarks.map(bookmark=><Addbook key={bookmark.id} bookmark={bookmark}></Addbook>)

      }

    </div>

       </div>
         
      


    );
};


Bookmark.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingtime: PropTypes.object.isRequired,

};



export default Bookmark;