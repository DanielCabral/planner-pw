export function getItem(arr, id) {
    if (id === 'null' || arr.id == id)
        return arr;
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

export function addItem(src, type, parentId, brotherRef = undefined) {
    let parent = getItem(src, parentId);
    const index = brotherRef
        ? parent.content.indexOf(brotherRef)
        : 0;
    const firstPart = parent.content.slice(0, index + 1);
    const secondPart = parent.content.slice(index + 1, parent.content.length);

    const newItem = {
        id: `${parent.id}-${parent.nextId}`,
        type,
        content: [],
        parentId: parent.id,
        nextId: 0
    }

    parent.content = [...firstPart, newItem, ...secondPart];
    parent.nextId += 1;
    console.log('src', src);
    return newItem;
}

export function removeItem(parent, item) {
    const index = parent.content.indexOf(item);
    const firstPart = parent.content.slice(0, index);
    const secondPart = parent.content.slice(index + 1, parent.content.length);
    const newVal = [...firstPart, ...secondPart];

    parent.content = newVal;
}