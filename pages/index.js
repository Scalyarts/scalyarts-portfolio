import Head from 'next/head';
import dynamic from 'next/dynamic';

const PortfolioSite = dynamic(() => import('../components/PortfolioSite'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>ScalyArts – 3D Художник</title>
        <meta name="description" content="3D модели мебели и интерьеров от ScalyArts" />
      </Head>
      <PortfolioSite />
    </>
  );
}
