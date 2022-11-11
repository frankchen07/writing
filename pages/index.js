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
          Currently, I have several "maps of content" in progress. There's one about <a href='https://www.frank-chen.com/posts/map-of-content-(product)'>product management</a>, another about <a href='https://www.frank-chen.com/posts/map-of-content-(mindset)'>mindset</a>, and the last about <a href='https://www.frank-chen.com/posts/map-of-content-(jiujitsu)'>jiujitsu</a>. I recommend clicking through a map, but if you're in the mood for roulette, you can jump around under the "working notes" header.
        </p>
        <p>
          My latest experience involves <a href='https://www.frank-chen.com/posts/interning-at-a-2-michelin-star-restaurant'>working at a 2 Michelin star restaurant</a>. I'm sharing my experiences both here and on <a href='https://www.twitter.com/fronkfeeds'>Twitter</a>.
        </p>
        <p>
          There's also some older maps I'm migrating over. I haven't fully decided how committed I am to these, but I've written some things about <a href='https://www.frank-chen.com/posts/map-of-content-(cooking)'>cooking</a> and have some canned <a href='https://www.frank-chen.com/posts/map-of-content-(scripts)'>scripts</a> that have served me well professionally.
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
