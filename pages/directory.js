 import { connectToDatabase } from "../util/mongodb";
 import utilStyles from '../styles/utils.module.css';
 import Layout from '../components/layout';
 import Link from 'next/link';
 import BookCard from '../components/bookCard';

export default function Directory({ bookList }) {
  
  const alphaDirectory = ["A","B","C","D","E","F","G",
  "H", "I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z"]; 
  
 return (
  <Layout>
    <h1 className={utilStyles.pageTitle}>Library Directory</h1>
    <ul className={utilStyles.rowBlock} id="alphaDirectory">
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
                <h2 className={utilStyles.sectionTitle} id={`${letterHead}`}>{ letterHead }</h2>
                <Link href= "#alphaDirectory"><a>Top</a></Link>
              </div>
            <ul className={utilStyles.rowBlock}>
              {bookList.filter((book)=> {if(book.title.split('')[0] === letterHead.toString() ){return book}}).map((book) => (
                <li id= {book.isbn}>
                  <BookCard book= {book}></BookCard>
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
      .sort( {title: 1} )
      .toArray();
  
      return {
        props: {
          bookList: JSON.parse(JSON.stringify(bookList)),
        },
      };
  }


