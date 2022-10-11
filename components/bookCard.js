import Image from 'next/image';
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import cardStyle from './bookCard.module.css';
import BookPage from './bookPage'

Modal.setAppElement('#__next');

export default function BookCard ( { book } ) {

  const [toggle, setToggle] = React.useState(false);
  const router = useRouter()

    return (
     <>
      <div className= {cardStyle.bookCard}>
        <div className= {cardStyle.cardContent}>
        <div className= {cardStyle.cover}>
          <div ><a href= { book.read_link }><Image 
            src= { `/Images/book_covers/${book.cover_image_src}` }
            width= {200}
            height= {300}
            alt= { book.title }
          /></a></div>

          <button className= {cardStyle.expandToggle} type= "button" onClick={() => setToggle(!toggle)}>
            expand
          </button>
        </div>
        </div>
      </div>
    
      
        <Modal
        isOpen={toggle}
        onRequestClose={() => setToggle(!toggle)}
        contentLabel="Book modal"
        // style= {{
        //   overlay:{
        //     position: 'relative',
        //     width: '70%',
        //     height: '60%'
        //   },
        //   content: {
        //     position: 'absolute',
        //     width: '60vw',
        //     height: '50vh' 
        //   }
        // }}
          >
        <BookPage book={book} />
      </Modal>
       
    </>
)}
