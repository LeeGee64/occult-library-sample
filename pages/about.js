import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout from '../components/layout';


export default function About() {
  
  return (

    <Layout>
      <article>
        <h1> About </h1>

        <div className={utilStyles.quoteBlock}>
          <p className={utilStyles.quote}>
            King Solomon was greater in riches and wisdom than all the other kings of the earth. 
            The whole world sought audience with Solomon to hear the wisdom God had put in his heart. 
          </p>
          <span className={utilStyles.quoteSource}>
            - 1 Kings 10:23-24, NIV
          </span>
        </div>   
        
        
        
      </article>        
        
    </Layout> 
)}