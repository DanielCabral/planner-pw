import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import {VscSplitHorizontal, VscSplitVertical} from 'react-icons/vsc'
import {FiChevronLeft, FiChevronRight, FiPlus} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'

export default function EditPlanner() {
    const userNavigation = [{ name: 'Calendario', href: '#' }, { name: 'Cheklist', href: '#' }];

    const [cols, setCols] = useState([
        {
            id: '1',
        },{
            id: '2'
        },
        {
            id: '3'
        }
    ]);

    const col = (item, index) =>{
        return (
        <div key={item.id} className='w-80 h-96 bg-new-planner border-4 border-dotted border-secondary'>
            <div className='ml-2 mt-2 flex flex-row'>
                <button cursor='pointer' className=''>
                    <VscSplitHorizontal className='p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className=''>
                    <VscSplitVertical className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className='' onMouseDown={() => previus(index)}>
                    <FiChevronLeft className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className='' onMouseDown={() => next(index)}>
                    <FiChevronRight className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className='' onMouseDown={() => deleteCol(item.id)}>
                    <MdDelete className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
            </div>
            <div className='h-80 flex items-center justify-center'>              
                <Menu as="div" className="relative flex-shrink-0 ml-5">
              <div>
                <Menu.Button className="flex flex-col outline-none focus:outline-none">
                <p className='text-5xl'>{item.id}</p>              
                <FiPlus className='p-1 text-secondary text-7xl'/>
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
    )
}

function deleteCol(id) {
    setCols(cols.filter(item => item.id !== id))
}

function addCol() {
    setCols([...cols, {id: ''+Date.now()}])    
}

function previus(index){
    if(index > 0){
        const tempCols = cols;
        tempCols.splice(index-1,0,tempCols.splice(index,1)[0])
        console.log(tempCols);        
        setCols(JSON.parse(JSON.stringify(tempCols)))
    }
}

    function next(index){
        if(index < cols.length-1){
            const tempCols = cols;
            tempCols.splice(index,0,tempCols.splice(index+1,1)[0])
            console.log(tempCols);        
            setCols(JSON.parse(JSON.stringify(tempCols)))
        }
    }

    return (
       <div className='w-full h-screen'>        
          <div className='mt-10 w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>           
          {/* {col()}
           {col()}
           {col()}*/}
           {cols.map((item, index) => col(item, index))}
           {cols.length % 3 === 0 && <div className='flex flex-row'>
                <p className='text-white'>.</p>
            </div>}
           <div className='flex flex-row'>
           <button className='cursor-pointer' onClick={() => addCol()}>
                <FiPlus className='p-1 text-secondary text-7xl'/>
           </button>
           </div>
          </div>
       </div>
    );
}