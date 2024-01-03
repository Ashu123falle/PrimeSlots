
import '@/styles/globals.css'
import {AuthContextProvider} from '@/Context/authContext'

export default function App({ Component, pageProps }) {
  return (
  <AuthContextProvider>
  <Component {...pageProps} />
  </AuthContextProvider>
  )
}
