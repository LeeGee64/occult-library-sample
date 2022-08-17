 import { connectToDatabase } from "../util/mongodb";
 import styles from '../components/layout.module.css';
 import utilStyles from '../styles/utils.module.css';
 import Layout from '../components/layout';
 import Link from 'next/link';
 import Image from 'next/image';
 import BookCard from '../components/bookCard';

export default function Directory({ bookList }) {
  
  const alphaDirectory = ["A","B","C","D","E","F","G",
  "H", "I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z"]; 
  
 return (
  <Layout>
    <h1>Library Directory</h1>
    <ul id="alphaDirectory">
      {alphaDirectory.map((letterHead) => (
        <Link href= {`#${letterHead}`}>
          <li id={`${letterHead}Ref`}><a>{ letterHead }</a></li>
        </Link>
      ))}
    </ul>
      <ul>
        {alphaDirectory.map((letterHead) => (
            <li>
              <div>
                <h2  id={`${letterHead}`}>{ letterHead }</h2>
                <Link href= "#alphaDirectory"><a>Top</a></Link>
              </div>
            <ul>
              {bookList.filter((book)=> {if(book.title.split('')[0] === letterHead.toString() ){return book}}).map((book) => (
                <li id= {book.isbn}>
                  <BookCard book= {book}></BookCard>
                  {/* <h2>{book.title}</h2>
                  <p>{book.author}</p>
                  <p>{book.isbn}</p>
                  <p>{book.read_link}</p>
                  <img src={ `Images/book_covers/${book.cover_image_src}`}></img> */}
                </li>
              ))}
            </ul>
        </li>
        ))}
      </ul>
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


