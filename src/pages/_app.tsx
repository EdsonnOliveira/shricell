import '@atomic/constants/globals.css'
import '@atomic/constants/text.css'

import type { AppProps } from 'next/app'
import { Rubik } from '@next/font/google'
import { storeWrapper } from '@redux/store'

const rubik = Rubik({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default storeWrapper.withRedux(App)