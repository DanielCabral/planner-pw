import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { VscSplitHorizontal, VscSplitVertical } from 'react-icons/vsc'
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import PropTypes from 'prop-types';



const Item = ({ index, count, item, previus, next, deleteCol, splitH, splitV }) => {
    const userNavigation = [{ name: 'Calendario', href: '#' }, { name: 'Cheklist', href: '#' }];
    if (item.type == 'col' && item.content.length == 0)
        return (
            <div className='bg-new-planner border-4 border-dotted border-secondary' style={{ height: `100%`, width: `100%` }}>
                <div className='ml-2 mt-2 flex flex-row'>
                    <button cursor='pointer' className='' onClick={() => splitH(item.id)}>
                        <VscSplitHorizontal className='p-1 text-secondary border border-secondary text-3xl rounded' />
                    </button>
                    <button cursor='pointer' className='' onClick={() => splitV(item.id)}>
                        <VscSplitVertical className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                    </button>
                    <button cursor='pointer' className='' onMouseDown={() => previus(item.id)}>
                        <FiChevronLeft className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                    </button>
                    <button cursor='pointer' className='' onMouseDown={() => next(item.id)}>
                        <FiChevronRight className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                    </button>
                    <button cursor='pointer' className='' onMouseDown={() => deleteCol(item.id)}>
                        <MdDelete className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded' />
                    </button>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <Menu as="div" className="relative flex-shrink-0 ml-5">
                        <div>
                            <Menu.Button className="flex flex-col outline-none focus:outline-none">
                                <p>{item.id}</p>
                                <FiPlus className='p-1 text-secondary text-7xl' />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <NavLink
                                                to={item.href}
                                                className={
                                                    'block py-2 px-4 text-sm text-gray-700'
                                                }>
                                                {item.name}
                                            </NavLink>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        );
    else if (item.type === 'col' && item.content.length != 0) {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                {item.content.map((element, index) => (
                    <Item
                        key={index}
                        index={index}
                        count={element.content.length}
                        item={element}
                        previus={previus}
                        next={next}
                        deleteCol={deleteCol}
                        splitH={splitH}
                        splitV={splitV}
                    />
                ))}
            </div>
        );
    }
    else if (item.type === 'row') {
        return (
            <div className='flex' style={{ height: `${100 / item.parent.content.length}%` }} >
                {item.content.map((element, index) => (
                    <Item
                        key={index}
                        count={item.content.length}
                        index={index}
                        item={element}
                        previus={previus}
                        next={next}
                        deleteCol={deleteCol}
                        splitH={splitH}
                        splitV={splitV}
                    />
                ))}
            </div>
        );
    }
    else {
        return (
            <>
                {item.content.map(element => (
                    <p>ola3</p>
                ))}
            </>
        );
    }
}

Item.prototype = {
    index: PropTypes.number,
    count: PropTypes.number,
    item: PropTypes.object,
    previus: PropTypes.func,
    next: PropTypes.func,
    deleteCol: PropTypes.func,
    splitH: PropTypes.func,
    splitV: PropTypes.func
};

export default Item;