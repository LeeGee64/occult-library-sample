import { connectToDatabase } from "../util/mongodb";
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Link from 'next/link';
import BookCard from '../components/bookCard';
import React, { useState } from 'react';

export default function BookSearch({ bookList }) {

 const [searchSubject, setSearchSubject] = React.useState('title');
 const [searchContent, setSearchContent] = React.useState('');
 const [searchArray, setSearchArray] = React.useState([]);

    function searchValueChange(e){
        const {value} = e.currentTarget;
        setSearchSubject(value);
        console.log(value);
    };

    function searchTextChange(e){
        const {value} = e.currentTarget;
        let regVal = value.toLowerCase(); 
        let regex = new RegExp(`^(${regVal})`,"g");
        setSearchContent(value);
        setSearchArray(searchArray.length = 0); 
        setSearchArray(searchArray.concat(bookList)
        .filter(sr => {if(sr.title.toLowerCase().match(regex)){return sr}})
        .map(sr => {return (<li id={sr.isbn}><BookCard book= {sr}></BookCard> </li>)})); 
    };



return (
    <Layout>
        <h1>Search</h1>

        <p>Use the form below to search through the library (not case sensitive).</p>

        <form onSubmit={e => e.preventDefault()}>
            <select id="searchValue" onChange= {e => searchValueChange(e)}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="isbn">ISBN</option>
            </select>
            
            <input id="searchText" name="searchText" onChange= {e => searchTextChange(e)} value={searchContent}></input>
            {/* rework the filter */}


            <ul>{searchArray}</ul>
        </form>
    </Layout>
)}



export async function getStaticProps() {
   const { db } = await connectToDatabase();
 
   const bookList = await db
     .collection("library_002")
     .find({})
     .sort( {title: 1} )
     .toArray();
 
     return {
       props: {
         bookList: JSON.parse(JSON.stringify(bookList)),
       },
     };
 }
