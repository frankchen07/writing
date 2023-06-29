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

        <p>
          Currently, I'm helping to build the private internet with <a href='https://twitter.com/AleoHQ'>Aleo</a> through the power of zero knowledge and distributed ledgers. In a past life, I played around with numbers and told stories as an analyst, but eventually shifted over to <a href='https://www.frank-chen.com/posts/map-of-content-(product)'>product</a>.
        </p>

        <p>
          I do a fuck ton of <a href='https://www.instagram.com/frankthetankjj/'>jiujitsu</a> and consider it one the defining obsessions that has altered the way I think about <a href='https://www.frank-chen.com/posts/map-of-content-(mindset)'>mindset</a>, <a href='https://www.frank-chen.com/posts/map-of-content-(jiujitsu)'>learning, training, and strategy</a>.
        </p>

        <p>
          I'm into a fair amount of <a href='https://www.instagram.com/fronkfeeds/'>cooking related shit</a> as well - <a href='https://www.frank-chen.com/posts/map-of-content-(cooking)'>food science blogging, hosting experimental supper clubs</a>, and <a href='https://www.frank-chen.com/posts/working-at-a-2-michelin-star-restaurant'>staging at a 2* Michelin restaurant</a>. The hospitality space continues to inspire me from a technological and cultural standpoint, and continually reminds me that to cook is to be human.
        </p>

        <p>
          I run my life in a series of fractal experiments. Like food, there are seasons to everything. The skill of <a href='https://www.frank-chen.com/posts/map-of-content-(scripts)'>having courage and talking to strangers</a> helps me to figure out what hell I'm doing. Also, it helps to do some <a href='https://www.frank-chen.com/posts/2022-year-in-review'>reflection (2022)</a>.
        </p>

        <p>
          Lately, I've been posting life updates on my <a href='https://fronk.substack.com/'>email newsletter</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>all explorations</h2>
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
