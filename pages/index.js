import Head from 'next/head'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import clientPromise from '../lib/mongodb'


export default function Home({ isConnected }) {
  return (
    <Layout home>
  
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>

       { { isConnected }  ? (
          console.log("You are connected to MongoDB")
        ) : (
            console.log("You are NOT connected to MongoDB")
        )};  
    </Layout> 
)}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
