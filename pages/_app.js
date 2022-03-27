import '../styles/globals.css'
import '../public/assets/css/material-dashboard.css'
import Head from "next/head";
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/Layouts'

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link> 
      </Head>
      <Layout>
        
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      </Layout>
    </>
  )
}

export default MyApp
