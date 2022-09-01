
import utilStyles from '../styles/utils.module.css';
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
  
        <h2 className={utilStyles.tag}>
          Your quest for esoteric knowledge begins here
        </h2>
        <div className= {utilStyles.centerRowBlock}>
          <div className= {utilStyles.centerColumnBlock}>
            <p className= {utilStyles.randomBlurb}>Don't know how to start? Click the button below for a random selection.</p>
            <button className= {utilStyles.button} type= "button" onClick={ () => getRandom({ bookList })}>
              Random Book 
            </button>
            <ul className= {utilStyles.randomDisplay}>{ randomList.map(random => {return (<li id={random.isbn}><BookCard book= {random}></BookCard> </li>)}) } </ul>
          </div>
        </div>

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
