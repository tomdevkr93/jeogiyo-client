import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout'
import { GlobalStyles } from '../utils/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyles}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
