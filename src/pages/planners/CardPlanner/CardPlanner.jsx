import React from 'react';
import PropTypes from 'prop-types';
import { FiMoreVertical } from 'react-icons/fi'
const colors = ['fourth', 'danger', 'third', 'link'];

const CardPlanner = ({ index, planner }) => {
    return (
        <div className={`w-40 h-40 bg-${colors[index % colors.length]} rounded-xl p-3`}>
            <div className='flex justify-center items-center pt-9'>
                <p className="text-white font-serif font-bold text-4xl">{planner.type}</p>
            </div>
            <div className="w-full flex justify-between items-center mt-10">
                <p className="text-white font-light">{planner.title}</p>
                <a href='/planners' className='cursor-pointer'><FiMoreVertical className='text-white text-lg' /></a>
            </div>
        </div>
    );
}

CardPlanner.prototype = {
    index: PropTypes.number,
    planner: PropTypes.object
};

export default CardPlanner;