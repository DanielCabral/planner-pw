import React, { useState } from 'react';
import { MdAdd, MdDelete, MdMinimize, MdRemove } from 'react-icons/md'
import PropTypes from 'prop-types';

const Checklist = ({ item, changeType }) => {

    const [list, setList] = useState([{ checked: false, title: "" }]);

    function addItem() {
        setList(
            [...list, { checked: false, title: "" }]
        )
    }

    function checkItem(index) {
        let result = [...list];
        result[index].checked = !result[index].checked
        setList(result)
    }

    function changeItem(index, event) {
        let result = [...list];
        result[index].title = result[index].title = event.target.value
        setList(result)
    }

    function removeItem(index) {
        let result = [...list];
        result.splice(index, 1);
        setList(result)
    }
    return (
        <div className='bg-new-planner border-4 border-dotted border-secondary pr' style={{ height: `100%`, width: `100%` }}>
            <div className='ml-2 mt-2 flex flex-row'>
                <button cursor='pointer' className='' onMouseDown={() => changeType(item.id, 'col')}>
                    <MdDelete className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                </button>
                <button cursor='pointer' className='' onMouseDown={() => addItem()}>
                    <MdAdd className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                </button>
            </div>
            <div className='mt-10'>
                {
                    list.map((item, index) => (
                        <div className='flex items-center justify-center mt-2' key={index}>
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600 mr-5" checked={item.checked} onChange={() => { checkItem(index) }} />
                            <input type="text" className="input-text" value={item.title} onChange={(ev) => changeItem(index, ev)} />
                            <button cursor='pointer' className='' onMouseDown={() => removeItem(index)}>
                                <MdRemove className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

Checklist.prototype = {
    item: PropTypes.object,
    changeType: PropTypes.func
};

export default Checklist;