import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const data = useLoaderData();

    const [sort, setSort] = useState('')


    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedStoredBook = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList)
    }, []);
   

    //Sort related functionality
    const handleSort = (type) => {
        setSort(type)
        if (type === "Page") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortedByPage)
            // console.log(sortedByPage)
        }
        if(type === "Ratings"){
            const sortedByRatings = [...readList].sort((a, b) => a.rating -b.rating)
            setReadList(sortedByRatings)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('Page')}>Page</a></li>
                    <li><a onClick={() => handleSort('Ratings')}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read {readList.length}</h2>
                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;