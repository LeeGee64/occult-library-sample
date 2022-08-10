import { connectToDatabase } from "../util/mongodb";

export default function Directory({ bookList }) {
  return (
    <div>
      <h1>Library Directory</h1>
      <ul class="directoryAlpha" id="a">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "a"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="b">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "b"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>
    
      <ul class="directoryAlpha" id="c">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "c"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="d">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "d"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="e">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "e"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="f">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "f"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="g">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "g"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="h">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "h"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="i">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "i"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="j">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "j"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="k">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "k"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="l">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "l"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="m">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "m"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="n">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "n"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="o">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "o"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="p">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "p"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="q">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "q"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="r">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "r"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="s">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "s"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="t">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "t"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="u">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "u"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="v">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "v"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="w">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "w"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="x">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "x"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="y">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "y"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>

      <ul class="directoryAlpha" id="z">
        {bookList.filter((book)=> {if(book.title.split('')[0].toLowerCase() === "z"){return book}}).map((book) => (
          <li>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>{book.read_link}</p>
            <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}


export async function getServerSideProps() {
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


