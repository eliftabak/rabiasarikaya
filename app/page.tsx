import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rabia Sarıkaya - Diyetisyen</title>
        <meta name="description" content="Sağlıklı beslenme ve diyet danışmanlığı." />
      </Head>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#faffe4] py-20 text-center flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-6xl font-bold text-[#5D8736] leading-tight">Sağlıklı Yaşam İçin Doğru Beslenme</h1>
          <p className="mt-6 text-xl text-gray-700">Bireysel beslenme programlarıyla hayatınızı değiştirin ve daha sağlıklı bir yaşama adım atın.</p>
          <Link href="/contact">
            <button className="mt-8 bg-[#5D8736] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#809D3C] transition">Danışmanlık Al</button>
          </Link>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#809D3C]">Hizmetlerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-6">
          <div className="bg-[#A9C46C] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Kilo Kontrolü</h3>
            <p className="text-md mt-4">Size özel hazırlanan beslenme planları ile ideal kilonuza ulaşın.</p>
          </div>
          <div className="bg-[#A9C46C] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Sporcu Beslenmesi</h3>
            <p className="text-md mt-4">Performansınızı artıracak beslenme önerileri.</p>
          </div>
          <div className="bg-[#A9C46C] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Hastalık Diyetleri</h3>
            <p className="text-md mt-4">Diyabet, tansiyon ve diğer sağlık sorunları için beslenme planları.</p>
          </div>
        </div>
      </section>
      
      {/* Instagram Video Section */}
      <section className="py-16 bg-[#F4FFC3] text-center">
        <h2 className="text-4xl font-bold text-[#5D8736]">Instagram'da Beni Takip Edin</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <iframe className="w-full h-60" src="https://www.instagram.com/embed/sample-video-1" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <iframe className="w-full h-60" src="https://www.instagram.com/embed/sample-video-2" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <iframe className="w-full h-60" src="https://www.instagram.com/embed/sample-video-3" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#809D3C]">Son Yazılar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-6">
          <div className="bg-[#A9C46C] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Sağlıklı Kahvaltı Önerileri</h3>
            <p className="text-md mt-4">Güne enerjik başlamak için harika tarifler.</p>
          </div>
          <div className="bg-[#A9C46C] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Diyet Yaparken Dikkat Edilmesi Gerekenler</h3>
            <p className="text-md mt-4">Sürdürülebilir bir diyet için ipuçları.</p>
          </div>
          <div className="bg-[#A9C46C] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Spor Öncesi ve Sonrası Beslenme</h3>
            <p className="text-md mt-4">Performansınızı en üst düzeye çıkaracak beslenme önerileri.</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#5D8736] text-white py-6 text-center">
        <p>&copy; 2025 Rabia Sarıkaya. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
