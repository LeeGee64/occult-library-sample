import { connectToDatabase } from "../util/mongodb";
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Link from 'next/link';
import BookCard from '../components/bookCard';

export default function BookSearch() {

 
return (
    <Layout>
        <h1>Search</h1>

        <p>Choose ho</p>


    </Layout>
)}



// export async function getStaticProps() {
//    const { db } = await connectToDatabase();
 
//    const bookList = await db
//      .collection("library_002")
//      .find({})
//      .toArray();
 
//      return {
//        props: {
//          bookList: JSON.parse(JSON.stringify(bookList)),
//        },
//      };
//  }
