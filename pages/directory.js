 import { connectToDatabase } from "../util/mongodb";


export default function Directory({ bookList }) {
  
  const alphaDirectory = ["A","B","C","D","E","F","G",
  "H", "I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z"]; 
  
 return (
  <div>
    <h1>Library Directory</h1>
      <ul>
        {alphaDirectory.map((letterHead) => (
            <li>
            <h2  id={`${letterHead}`}>{ letterHead }</h2>
            <ul>
              {bookList.filter((book)=> {if(book.title.split('')[0] === letterHead.toString() ){return book}}).map((book) => (
                <li>
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                  <p>{book.isbn}</p>
                  <p>{book.read_link}</p>
                  <img src={ `Images/book_covers/${book.cover_image_src}`}></img>
                </li>
              ))}
            </ul>
        </li>
        ))}
      </ul>
    </div>
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


