import { connectToDatabase } from "../util/mongodb";
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
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
        let regex = null;
        let resultArray = [];

        if(value){
            regex = new RegExp(`^(${value})`,"i");
        }
        
        setSearchContent(value);
        setSearchArray(searchArray.length = 0); 

        resultArray = bookList
            .filter(sr => {if(sr[searchSubject].match(regex)){return sr}})
            .map(sr => {return (<li id={sr.isbn}><BookCard book= {sr}></BookCard> </li>)});
    
        
        if(resultArray.length){
            setSearchArray(searchArray.concat(resultArray));}
        else{
            setSearchArray([]); 
        }
    };



return (
    <Layout>
        <h1 className={utilStyles.pageTitle}>Search</h1>

        <p>Use the form below to search through the library (not case sensitive).</p>

        <form onSubmit={e => e.preventDefault()}>
            <select id="searchValue" onChange= {e => {searchValueChange(e)}}>
                <option value="title">Title</option>
                <option value="author">Author</option>
            </select>
            
            <input id="searchText" name="searchText" onChange= {e => {searchTextChange(e)}} value={searchContent}></input>

            <ul className={utilStyles.rowBlock}>{searchArray}</ul>
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
