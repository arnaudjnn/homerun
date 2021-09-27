import { GetStaticProps } from 'next';
import Layout from 'components/layout'
import Sections from 'components/sections'

const IndexPage = ({ sections }) => (
  <Layout>
    <Sections sections={sections} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  
  // Normally fetched from headless CMS
  const sections = require('content/sections.json');

  return {
    props: {
      sections
    }
  }
}

export default IndexPage
