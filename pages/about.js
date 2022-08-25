import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout from '../components/layout';
import Image from 'next/image';


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
        
        <h2>The Library</h2>

        <section className={utilStyles.rowBlock}>
        
          <div className={utilStyles.imageBlock}>
            <Image
                src="/Images/king_solomon.jpeg"
                height={144}
                width={300}
                alt="King Solomon"
            />
            <span className={utilStyles.imageCaption}>King Solomon</span>
          </div>
          
          <section>
            <p>
              <a href="https://en.wikipedia.org/wiki/Solomon">King Solomon</a> is a prominent figure in Judiasm, Christianity, Islam, and various other belief systems.
              He is universally regarded as a ruler with unparalled wisdom, vast riches, and a powerful connection to Divine power that granted him mastery of 
              diverse spiritual forces. This app is made to mirror Solomon's ecclectic understanding of the esoteric and ease the user's exploration of this 
              vibrant and historied subject matter. 
            </p>

            <p>
              This app was built with <a href="https://nextjs.org/">Next.js</a> and animated with <a href="https://www.framer.com/">Framer Motion</a>. 
              The book data is collected from <a href="https://www.goodreads.com/">Goodreads</a> and stored/called from <a href="https://www.mongodb.com/">MongoDB</a>. 
            </p>
          </section>

        </section>

        <h2>The Developer</h2>
        
        <section className={utilStyles.rowBlock}>
          
          <div className={utilStyles.imageBlock}>
              <Image
                  src="/Images/profile.JPG"
                  height={144}
                  width={144}
                  alt="Lee Gill"
              />
              <span className={utilStyles.imageCaption}>Lee Gill</span>
          </div>
        
          <p>
            I'm Lee Gill, a software developer working in the New Jersey/New York area.
            This project stemmed from my own passion for Occult studies as well as a desire to learn and master
            <a href="https://nextjs.org/">Next.js</a> and <a href="https://reactjs.org/">React</a> as coding technologies. Outside of programming, I am an activist fighting for police reform 
            as well as Ethical uses of Open Source Tehcnology. You can find me using the social media links at the bottom 
            of every page.
          </p>

        </section>

        <h2>Future Goals</h2>
        
        <p>
          While building this app was both fun and educational, there are a number of areas I would
          like to see improved in the future. Here are some prospective optimizations:
        </p>

        <ul>
          <li><strong>Database Complexity:</strong> Right now, the library is a simple flat database with some key values pulled 
          from <a href="https://www.goodreads.com/">Goodreads</a>. The book cover images are served to the client directly from the app.
          In the future, I would like to have more complex relationships between data entries(i.e. similar subjects, same cultures of origin)
          as well as images stored on a database that can be served when needed. </li>
          <li><strong>Added Features:</strong> While being able to search through the library by Title and Author is a good start, allowing
          users to query based on other factors like ISBN will aid in the apps' accessibility. Speaking of accessibility, I also aim to add 
          tehcnology to allow the visually impared to use the library. Additional features like user-saved lists and a 'like' system can also
          be useful.</li>
        </ul>

        <p>
          If you have any questions/suggestions regarding this project, or if you're interested in 
          joining the development team, reach out to me via the social media links below.  
        </p>

      </article>        
        
    </Layout> 
)}