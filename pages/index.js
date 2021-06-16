import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import RapScreen from "@components/RapScreen";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Freestyle Rap!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Slackey&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className="main-container">
        {/* <Header title="Welcome to freestyle rap!" /> */}
        <RapScreen />
      </main>

      <Footer />
    </div>
  );
}
