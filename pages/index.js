// Head
import Head from 'next/head';



// Components
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portray</title>
        <link rel="icon" herf="/favicon.ico" />
      </Head>

      <Navbar />
      <SideBar />
    </>
  )
}
