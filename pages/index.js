import Head from 'next/head';
import { useSession } from 'next-auth/client';

// Components
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import Login from '../components/login';

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />

  return (
    <>
      <Head>
        <title>Portray</title>
        <link rel="icon" herf="/favicon.ico" />
      </Head>

      <Navbar />
      <SideBar />

      <main>
      </main>
    </>
  )
}
