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
          Hello, I'm <a href='https://www.linkedin.com/in/frankchen07/'>Frank</a>. This is my working knowledge base where I play around with concepts.
        </p>

        <p>
          I have several "maps of content":
        </p>

        <ul>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(product)'>product management</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(jiujitsu)'>jiujitsu</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(mindset)'>mindset</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(cooking)'>cooking</a></li>
          <li><a href='https://www.frank-chen.com/posts/map-of-content-(scripts)'>canned scripts</a></li>
        </ul>

        <p> I recommend clicking through a map, but if you're in the mood for roulette, you can jump around under the "working notes" header, or read some of the hand-selected things that less "map of content" and more "public experiments":
        </p>

        <ul>
          <li><a href='https://www.frank-chen.com/posts/working-at-a-2-michelin-star-restaurant'>working at a 2* Michelin restaurant, Birdsong SF</a></li>
          <li><a href='https://www.frank-chen.com/posts/2022-year-in-review'>2022 year in review</a></li>
          <li><a href='https://www.frank-chen.com/posts/getting-0-to-1-for-zero-knowledge-products'>0 to 1 in zero knowledge products</a></li>
        </ul>

        <p>
          If you're part of my email newsletter, you can visit the <a href='https://frank-chen.com/posts/email-newsletter-archive'>email newsletter archives</a> to see past posts. This is also an ongoing experiment.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>working notes</h2>
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
