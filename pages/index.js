import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getContentData } from '../lib/content'

export default function Home({ aboutContent }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const aboutContentData = await getContentData('about')
  return {
    props: {
      aboutContent: aboutContentData.contentHtml
    }
  }
}
