import Head from 'next/head'
import Header from '../components/Common/Header'
import Tabs from '../components/Common/Tabs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Components | Publishing Guide</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="pg_titles">
        <h2>Components</h2>
      </div>
      <div id="pgContainer">
        <div className='pg_content'>
          <Tabs />
        </div>
      </div>
    </>
  )
}
