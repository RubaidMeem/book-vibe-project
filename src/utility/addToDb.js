const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readlist")

    if(storedBookSTR){
        const storeBookData = JSON.parse(storedBookSTR)
        return storeBookData
    }
    else{
        return []
    }
}

const addToStoreDb = (id) => {

    const storeBookData = getStoredBook()

    if (storeBookData.includes(id)){
        alert("Id already exist")
    }
    else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData)
        localStorage.setItem("readlist", data)
    }
}

export {addToStoreDb, getStoredBook}