import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Item from './Item';
import { addItem, getItem, removeItem } from './Item/ItemMethods';
import ModalCreate from './ModalCreate';

const BASE_URL = 'http://localhost:8080';
export default function EditPlanner() {
    const history = useHistory();
    const [cols, setCols] = useState(defaultItens);
    const [modalOpen, setModalOpen] = useState(false);
    function openModal() {
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
    }

    function splitH(id) {
        let newCols = { ...cols }
        const brother = getItem(newCols, id);
        addItem(newCols, 'col', brother.parentId, brother);
        setCols(newCols);
    }

    function splitV(id) {
        let newCols = { ...cols }
        let val = getItem(newCols, id);
        if (val.type === 'col') {
            let parent = getItem(newCols, val.parentId);
            if (parent.content.length == 1) {
                let gramar = getItem(newCols, parent.parentId);
                let newRow = addItem(newCols, 'row', gramar.id, parent);
                addItem(newCols, 'col', newRow.id);
            }
            else {
                let newRow1 = addItem(newCols, 'row', val.id);
                addItem(newCols, 'col', newRow1.id);

                let newRow2 = addItem(newCols, 'row', val.id);
                addItem(newCols, 'col', newRow2.id);
            }
        }
        console.log('splitV', newCols)
        setCols(newCols)
    }

    function deleteCol(id) {
        let newCols = { ...cols }
        let item = getItem(newCols, id);
        let parent = getItem(newCols, item.parentId);
        if (parent.content.length > 1) {
            removeItem(parent, item);
        }
        else {
            let gramar = getItem(newCols, parent.parentId);
            removeItem(gramar, parent);
            if (gramar.content.length === 1 && gramar.id != '0') {
                gramar.content = [];
            }
        }
        console.log('newCols', newCols);
        setCols(newCols)
    }

    function previus(id) {
        let newCols = { ...cols }
        let item = getItem(newCols, id);
        let parent = getItem(newCols, item.parentId);
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
        let parent = getItem(newCols, item.parentId);
        const val = [...parent.content];
        const index = parent.content.indexOf(item);

        if (index < val.length - 1) {
            val.splice(index, 0, val.splice(index + 1, 1)[0])
            parent.content = val;
            setCols(newCols)
        }
    }

    async function savePlanner(name) {
        const result = { id: 0, name, contentJson: JSON.stringify(cols).toString(), isLayout: false }
        console.log(result)
        await axios.post(BASE_URL + '/content', result)
        history.push('/planners')
    }
    return (
        <div>
            <div className="bg-gray" style={{ height: '60px', display: 'flex', justifyContent: 'space-between' }}>
                <div></div>
                <button cursor='pointer' className='btn-fourth' onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={openModal}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                </button>
            </div>

            {
                modalOpen
                    ? <ModalCreate closeModal={closeModal} savePlanner={savePlanner} />
                    : <></>
            }
            <div className='m-10 flex justify-content items-center' style={{ height: 'calc(100vh - 224px)' }}>
                {cols.content.map((item, index) => (
                    <Item
                        key={index}
                        index={index}
                        count={cols.content.length}
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
            parentId: '0',
            nextId: 0
        },
        {
            id: '0-1',
            type: 'col',
            content: [],
            parentId: '0',
            nextId: 0
        },
        {
            id: '0-2',
            type: 'col',
            content: [],
            parentId: '0',
            nextId: 0
        }
    ],
    parentId: 'null',
    nextId: 3
}