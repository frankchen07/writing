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
          Hello, I'm Frank. This site is where you'll find my working notes, where everything is a work in progress. To explore, I'm in the process of patching together some maps of content (MOCs) on topics that I find interesting. Everything under "working notes" is linked to a map of content.
        </p>
        <p>
          Currently, there's two maps of content in progress - one about <a href='https://www.frank-chen.com/posts/map-of-content-(product)'>product management</a> and another about <a href='https://www.frank-chen.com/posts/map-of-content-(mindset)'>mindset</a>.
        </p>
        <p>
          There's also some older stuff I'm migrating over. I haven't fully decided how committed I am to these, but I've written some things about <a href='https://www.frank-chen.com/posts/map-of-content-(cooking)'>cooking</a> and have some canned <a href='https://www.frank-chen.com/posts/map-of-content-(scripts)'>scripts</a> that have served me well professionally. I also collect random <a href='https://www.frank-chen.com/posts/map-of-content-(articles)'>articles</a> that I like to revisit on a semi-regular basis. 
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
