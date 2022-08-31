import Image from 'next/image';
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React, { useState } from 'react';
import cardStyle from './bookCard.module.css';


export default function BookCard ( { book } ) {

  const [toggle, setToggle] = React.useState(false);
  // const [ref, bounds] = useMeasure(); 

    return (
     
      <div className= {cardStyle.bookCard} onClick={() => setToggle(!toggle)}>
      <MotionConfig transition= {{duration: 1}}>
        <div className= {cardStyle.cardContent}>
         
          <div style={{ position: 'relative' }}><a href= { book.read_link }><Image 
            src= { `/Images/book_covers/${book.cover_image_src}` }
            layout="fixed"
            objectFit="contain"
            width= {200}
            height= {300}
            alt= { book.title }
          /></a></div>
          
          {toggle ? (<motion.div 
                      key={toggle}
                      initial={{height: 0}}
                      animate={{ height: "auto"}}
                      className= { cardStyle.bookDescription }>   
            <a href= { book.read_link }><h2 className={ cardStyle.bookTitle }> { book.title } </h2></a>
            <h3 className={ cardStyle.bookAuthor }> { book.author } </h3>
            <hr className= { cardStyle.divider }></hr>
            { book.additional_authors ? <p> { book.additional_authors } </p> : null}
            <p> <span className = { cardStyle.strong }>ISBN:</span> { book.isbn ? book.isbn : "N/A"} </p>
            <div className= { cardStyle.additionalDetails}>
                <p> <span className = { cardStyle.strong }>Year:</span> {book.year_published ? book.year_published : "N/A"} </p>
                <p> <span className = { cardStyle.strong }>Pages:</span> { book.number_of_pages ? book.number_of_pages : "N/A"} </p>
            </div>
          </motion.div>) : null}
        
        </div>
        </MotionConfig>
      </div>
    )
}