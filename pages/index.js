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
          Hey, I'm <a href='https://www.linkedin.com/in/frankchen07/'>Frank</a>.
        </p>

        <p>
          I'm currently on sabbatical in 2024. This particular adventure started with living abroad in France and has morphed into various experiments to change the shape of my life. You can follow along on my <a href='https://fronk.substack.com/'>newsletter</a>.
        </p>

        <p>
          Just prior, I helped build the foundations of a more private internet with <a href='https://provable.com/'>Aleo</a> and a product to fund Ethereum public goods with <a href='https://gitcoin.co'>Gitcoin</a>. In a past life, I played around with numbers as an analyst, but eventually shifted over to telling stories in the realm of <a href='https://www.frank-chen.com/posts/map-of-content-(product)'>products</a>.
        </p>

        <p>
          I do a fuck ton of <a href='https://www.instagram.com/frankthetankjj/'>jiujitsu</a> and consider it an obsession that has altered the way I think about <a href='https://www.frank-chen.com/posts/map-of-content-(mindset)'>mindset</a>, <a href='https://www.frank-chen.com/posts/map-of-content-(jiujitsu)'>learning, training, and strategy</a>.
        </p>

        <p>
          I'm into a fair amount of <a href='https://www.instagram.com/fronkfeeds/'>cooking</a> as well. <a href='https://www.frank-chen.com/posts/map-of-content-(cooking)'>I did some food science blogging, hosted experimental supper clubs</a>, and <a href='https://www.frank-chen.com/posts/working-at-a-2-michelin-star-restaurant'>worked at a 2* Michelin restaurant</a>. The hospitality space continues to inspire me from a technological and cultural standpoint, and continually reminds me to be "unreasonably hospitable" because it keeps us human.
        </p>

        <p>
          A bunch of my experimental writing is found below, along with cross posts from my newsletter. Enjoy!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>a la carte bits</h2>
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
