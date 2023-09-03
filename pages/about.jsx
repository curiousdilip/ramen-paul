import Breadcrumbs from "@/components/Breadcrumbs"
import Header from "@/components/Header"
import Head from "next/head"
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                <title>About | Ramen Paul</title>
                <meta name="description" content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Breadcrumbs pageName="About" />
            <main>

            </main>
        </>
    )
}

export default about

