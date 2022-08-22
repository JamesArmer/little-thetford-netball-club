import Head from "next/head"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Little Thetford Netball Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
