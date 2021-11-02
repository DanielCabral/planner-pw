import React, { useState } from 'react';
import Item from './Item';

export default function EditPlanner() {
    const [cols, setCols] = useState(defaultItens);
    function getItem(arr, id) {
        let find = arr.content.find(el => el.id == id);
        if (find !== undefined) {
            return find;
        }
        else {

            for (let index = 0; index < arr.content.length; index++) {
                let element = getItem(arr.content[index], id);
                if (element != undefined)
                    return element;
            }
            return undefined;
        }
    }

    function splitH(id) {
        let newCols = { ...cols }
        let val = getItem(newCols, id);

        let focusCols = val.parent == 'root'
            ? newCols
            : val.parent;

        const index = focusCols.content.indexOf(val);
        const firstPart = focusCols.content.slice(0, index + 1);
        const secondPart = focusCols.content.slice(index + 1, focusCols.content.length);

        const newItem = {
            id: `${focusCols.id}-${focusCols.nextId}`,
            type: 'col',
            content: [],
            parent: val.parent,
            nextId: 0
        }
        focusCols.content = [...firstPart, newItem, ...secondPart];
        focusCols.nextId += 1;
        setCols(newCols);
    }

    function splitV(id) {
        let newCols = { ...cols }
        let val = getItem(newCols, id);
        if (val.type === 'col') {
            if (val.parent.type && val.parent.type == 'row') {
                const index = val.parent.parent.content.indexOf(val.parent);
                const firstPart = val.parent.parent.content.slice(0, index + 1);
                const secondPart = val.parent.parent.content.slice(index + 1, val.parent.parent.content.length);

                let newRow = {
                    id: `${val.parent.parent.id}-${val.parent.parent.nextId}`,
                    type: 'row',
                    content: [],
                    parent: val.parent.parent,
                    nextId: 1
                }
                newRow.content = [
                    {
                        id: `${newRow.id}-0`,
                        type: 'col',
                        content: [],
                        parent: newRow,
                        nextId: 0
                    }
                ]
                val.parent.parent.nextId += 1;
                val.parent.parent.content =
                    [...firstPart,
                        newRow, ...secondPart]
            }
            else {
                let newRow1 = {
                    id: `${val.id}-${val.nextId}`,
                    type: 'row',
                    content: [],
                    parent: val,
                    nextId: 1
                }
                newRow1.content = [
                    {
                        id: `${newRow1.id}-0`,
                        type: 'col',
                        content: [],
                        parent: newRow1,
                        nextId: 0
                    }
                ]
                val.nextId += 1;
                val.content.push(newRow1);

                let newRow2 = {
                    id: `${val.id}-${val.nextId}`,
                    type: 'row',
                    content: [],
                    parent: val,
                    nextId: 1
                }
                newRow2.content = [
                    {
                        id: `${newRow2.id}-0`,
                        type: 'col',
                        content: [],
                        parent: newRow2,
                        nextId: 0
                    }
                ]
                val.nextId += 1;
                val.content.push(newRow2);
            }
        }
        console.log('splitV', newCols)
        setCols(newCols)
    }

    function deleteCol(id) {
        let newCols = { ...cols }
        let item = getItem(newCols, id);
        let parent = item.parent === 'root' ? newCols : item.parent;
        const val = [...parent.content];
        const index = parent.content.indexOf(item);
        const firstPart = val.slice(0, index);
        const secondPart = val.slice(index + 1, val.length);
        const newVal = [...firstPart, ...secondPart];
        parent.content = newVal;
        setCols(newCols)
    }

    function previus(id) {
        let newCols = { ...cols }
        let item = getItem(newCols, id);
        let parent = item.parent === 'root' ? newCols : item.parent;
        const val = [...parent.content];
        const index = parent.content.indexOf(item);

        if (index > 0) {
            val.splice(index - 1, 0, val.splice(index, 1)[0]);
            parent.content = val;
            setCols(newCols)
        }
    }

    function next(id) {
        let newCols = { ...cols }
        let item = getItem(newCols, id);
        let parent = item.parent === 'root' ? newCols : item.parent;
        const val = [...parent.content];
        const index = parent.content.indexOf(item);

        if (index < val.length - 1) {
            val.splice(index, 0, val.splice(index + 1, 1)[0])
            parent.content = val;
            setCols(newCols)
        }
    }

    return (
        <div>
            <div className='m-10 flex justify-content items-center' style={{ height: 'calc(100vh - 164px)' }}>
                {cols.content.map((item, index) => (
                    <Item
                        key={index}
                        index={index}
                        count={1}
                        item={item}
                        previus={previus}
                        next={next}
                        deleteCol={deleteCol}
                        splitH={splitH}
                        splitV={splitV}
                    />
                ))}
            </div>
        </div>
    );
}

const defaultItens = {
    id: '0',
    type: 'row',
    content: [
        {
            id: '0-0',
            type: 'col',
            content: [],
            parent: 'root',
            nextId: 0
        },
        {
            id: '0-1',
            type: 'col',
            content: [],
            parent: 'root',
            nextId: 0
        },
        {
            id: '0-2',
            type: 'col',
            content: [],
            parent: 'root',
            nextId: 0
        }
    ],
    nextId: 3
}