import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
// import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <a href='https://www.linkedin.com/in/frankchen07/'>Frank</a>. This is a working knowledge base where I share concepts I'm experimenting with.
        </p>

        <ul>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(product)'>being better at product management</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(jiujitsu)'>jiujitsu philosophies</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(mindset)'>mindset for performance</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(cooking)'>cooking endeavors</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(scripts)'>canned scripts for easy writing</a></li>
          <li><a href='https://www.frank-chen.com/posts/working-at-a-2-michelin-star-restaurant'>working at a 2* michelin restaurant, birdsong sf</a></li>
          <li><a href='https://www.frank-chen.com/posts/2022-year-in-review'>2022 year in review</a></li>
        </ul>

        <p>
          I also post life updates on my <a href='https://fronk.substack.com/'>email newsletter</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>all writings</h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({/ id, date, title }) => ( */}
          {allPostsData.map(({ id, title, url }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${url}`}>
                <a>{title}</a>
              </Link>
              <br />
              {/* <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
