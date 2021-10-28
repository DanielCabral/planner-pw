import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { VscSplitHorizontal, VscSplitVertical } from 'react-icons/vsc'
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import Item from './Item';

export default function EditPlanner() {
    const [cols, setCols] = useState(defaultItens);

    function splitH(index) {
        const val = [...cols];
        const firstPart = val.slice(0, index + 1);
        const secondPart = val.slice(index + 1, val.length);
        const newVal = [...firstPart,
        {
            id: (val.length + 1).toString(),
            type: 'col',
            content: []
        }, ...secondPart];

        setCols(newVal)
    }

    function splitV(index) {
        const val = [...cols];
        const firstPart = val.slice(0, index + 1);
        const secondPart = val.slice(index + 1, val.length);
        const newVal = [...firstPart,
        {
            id: (val.length + 1).toString(),
            type: 'col',
            content: []
        }, ...secondPart];

        setCols(newVal)
    }

    function deleteCol(index) {
        const val = [...cols];
        const firstPart = val.slice(0, index);
        const secondPart = val.slice(index + 1, val.length);
        const newVal = [...firstPart, ...secondPart];

        setCols(newVal)
    }

    function addCol() {
        setCols([...cols, { id: '' + Date.now() }])
    }

    function previus(index) {
        if (index > 0) {
            const tempCols = cols;
            tempCols.splice(index - 1, 0, tempCols.splice(index, 1)[0])
            console.log(tempCols);
            setCols(JSON.parse(JSON.stringify(tempCols)))
        }
    }

    function next(index) {
        if (index < cols.length - 1) {
            const tempCols = cols;
            tempCols.splice(index, 0, tempCols.splice(index + 1, 1)[0])
            console.log(tempCols);
            setCols(JSON.parse(JSON.stringify(tempCols)))
        }
    }

    return (
        <div>
            <div className='m-10 h-full flex justify-content items-center'>
                {cols.map((item, index) => (
                    <Item
                        key={index}
                        index={index}
                        item={item}
                        previus={previus}
                        next={next}
                        deleteCol={deleteCol}
                        splitH={splitH}
                    />
                ))}
            </div>
        </div>
    );
}

const defaultItens = [
    {
        id: '1',
        type: 'col',
        content: []
    },
    {
        id: '2',
        type: 'col',
        content: []
    },
    {
        id: '3',
        type: 'col',
        content: []
    }
]