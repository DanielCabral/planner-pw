import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md'
import PropTypes from 'prop-types';

const Text = ({ item, changeType }) => {
    return (
        <div className='bg-new-planner border-4 border-dotted border-secondary pr' style={{ height: `100%`, width: `100%` }}>
            <div className='ml-2 mt-2 flex flex-row'>
                <button cursor='pointer' className='' onMouseDown={() => changeType(item.id, 'col')}>
                    <MdDelete className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                </button>
            </div>
            <div className='mt-10'>
                <textarea rows="4" cols="50" re></textarea>
            </div>
        </div>
    );
}

Text.prototype = {
    item: PropTypes.object,
    changeType: PropTypes.func
};

export default Text;