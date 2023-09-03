import Header from "@/components/Header"
import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <title>Ramen Paul – We are Nothing</title>
        <meta name="description" content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
