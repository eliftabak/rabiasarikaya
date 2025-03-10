import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InstagramPreview from './components/InstagramPreview';
import Footer from './components/Footer';
import BlogPreview from './components/BlogPreview';

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Rabia Sarıkaya - Diyetisyen</title>
        <meta name="description" content="Sağlıklı beslenme ve diyet danışmanlığı." />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <InstagramPreview />
      <BlogPreview />      
      <Footer />
    </div>
  );
}
