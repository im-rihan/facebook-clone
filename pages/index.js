import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Signin from "../components/Signin";

export default function Home({ session }) {
  if (!session) return <Signin />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);
  console.log(session);
  return {
    props: {
      session,
    },
  };
}
