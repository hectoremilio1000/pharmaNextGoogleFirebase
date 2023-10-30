import BannerPortada from '@/components/Promociones/BannerPortada'
import Image from 'next/image'
import Head from "next/head";
import OfertaTime from '@/components/Promociones/OfertaTime';
import ProductList from '@/components/ProductList/ProductList';
import Beneficios from '@/components/Beneficios/Beneficios';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pharmahogar</title>
        <meta
          name="description"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/logopharmahogar.png" />
        <meta name="of:title" content="San Mateo" />
        <meta
          name="of:description"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta
          name="og:description"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta property="og:url" content="https://laboratoriossanmateo.com/" />
        <meta
          name="og:title"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta
          property="og:type"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta
          property="og:image"
          content="https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
        />
        {/* <link rel="apple-touch-icon" href="../logo192.png" />
        <link rel="manifest" href="../manifest.json" /> */}
      </Head>
      <BannerPortada />
      <OfertaTime />
      <Beneficios/>
      <ProductList/>
   </>
  )
}
