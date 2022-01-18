import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Posts.module.css'

export const getStaticProps = async() => {
  const res = await axios(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.data

  return {
    props: {
      posts: data
    }
  }
}

export default function Posts({ posts }) {
  return (
    <div>
      <Head>
        <title>Posts - NextJS Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
          <h2>Items</h2>
          <div>
            {
              posts.map(post => 
                <Link  
                key={post.id} 
                href={`/posts/${post.id}`} 
                passHref>
                  <div className={styles.post_pointer}>
                    <h3 className={styles.postTitle}>
                      {post.id}. {post.title}
                    </h3>
                    <p>
                      {post.body}
                    </p>
                  </div>
                </Link>
              )
            }
          </div>
      </section>
    </div>
  )
}