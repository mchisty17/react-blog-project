import PropTypes from 'prop-types';

const Addbook = ({bookmark}) => {
const {title}=bookmark
    return (
        <div className='mt-3 px-8 py-6 rounded-xl bg-slate-200'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};

Addbook.propTypes = {
    bookmark: PropTypes.object.isRequired,
};





export default Addbook

