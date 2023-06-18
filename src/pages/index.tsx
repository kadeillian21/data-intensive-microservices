import Head from "next/head";

export default function DashboardLayout() {
  return (
    <>
      <Head>
        <title>Data Dive</title>
        <meta name="description" content="Data Dive" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2ed24f] to-[#a1c724]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-6xl font-bold text-center text-white">
            Hello Data Dive
          </h1>
        </div>
      </main>
    </>
  );
}
