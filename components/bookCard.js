import Image from 'next/image';
import cardStyle from './bookCard.module.css';

export default function BookCard ( { book } ) {
    return (
        <div className= {cardStyle.bookCard}>
          
          <a href= { book.read_link }><Image 
            src= { `/Images/book_covers/${book.cover_image_src}` }
            height= {30}
            width= {30}
            alt= { book.title }
          /></a> 

          <div className= { cardStyle.bookDescription }>
            <a href= { book.read_link }><h2 className={ cardStyle.bookTitle }> { book.title } </h2></a>
            <h3 className={ cardStyle.bookAuthor }> { book.author } </h3>
            <p> { book.additional_authors } </p>
            <p>ISBN: { book.isbn ? book.isbn : "N/A"} </p>
            <div className= { cardStyle.addtionalDetails}>
                <p> Year: {book.year_published ? book.year_published : "N/A"} </p>
                <p> Pages: { book.number_of_pages ? book.number_of_pages : "N/A"} </p>
            </div>
          </div>

        </div>
    )
}