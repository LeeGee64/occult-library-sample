
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout from '../components/layout';
import BookCard from '../components/bookCard';
import { connectToDatabase } from "../util/mongodb";
import React, { useState } from 'react';


export default function Home({ bookList }) {
  
  const [randomList, setRandomList] = React.useState([]); 

  function getRandom({ bookList }){
    let randomSelect = bookList[Math.floor(Math.random()*bookList.length)];
    setRandomList(randomList.length = 0); 
    setRandomList(randomList.concat(randomSelect));
  }  

  return (

    <Layout home>
  
        <h2>
          Your quest for esoteric knowledge begins here.
        </h2>

        <p>
          This app is designed to ease research into Spiritualism, Magick, and the general Occult. 
        </p>

        <p>
          Learn more about this app{' '}
          <Link href= "/about">
            <a>here.</a>
          </Link>
        </p>

        <p>
          Browse the full collection{' '}
          <Link href= "/directory">
            <a>here.</a>
          </Link>
        </p>   

        <p>
          Search for specific texts{' '}
          <Link href= "/booksearch">
            <a>here.</a>
          </Link>
        </p>            
        
        <p>Don't know how to start? Click the button below for a random selection</p>
        <button type= "button" onClick={ () => getRandom({ bookList })}>
          Random Book 
        </button>
        <ul>{ randomList.map(random => {return (<li id={random.isbn}><BookCard book= {random}></BookCard> </li>)}) } </ul>
      
    </Layout> 
)}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const bookList = await db
    .collection("library_002")
    .find({})
    .toArray();

    return {
      props: {
        bookList: JSON.parse(JSON.stringify(bookList)),
      },
    };
}
