import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="py-16 px-6 mx-auto flex flex-col lg:flex-row gap-10 items-center">
      {/* Contact Info Section */}
      <div className="lg:w-1/2 text-center">
        <h1 className="text-5xl font-bold font-sniglet text-[#4A6D2C]">İletişime Geç</h1>
        <p className="text-gray-600 mt-4 max-w-md mx-auto leading-relaxed">
          Soruların mı var? Bana e-posta gönderebilir veya formu
          kullanarak ulaşabilirsin.
        </p>

        {/* Contact Details */}
        <div className="mt-6 flex flex-col items-center space-y-3">
          <Link
            href="mailto:rabiasarikaya86@gmail.com"
            className="text-lg font-semibold text-[#4A6D2C] hover:underline"
          >
            📧 rabiasarikaya86@gmail.com
          </Link>
          <p className="text-gray-600">📍 İstanbul, Türkiye</p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-2 text-[#4A6D2C] text-2xl">
            <Link href="https://www.instagram.com/i.am_rabiaa" target="_blank">
              <FaInstagram className="hover:text-[#5D8736] transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/rabia-sar%C4%B1kaya-632a081b3/" target="_blank">
              <FaLinkedin className="hover:text-[#5D8736] transition" />
            </Link>
          </div>
        </div>
      </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2">
          <form className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Adınız</label>
                <Input type="text" placeholder="Adınızı girin" required />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Soyadınız</label>
                <Input type="text" placeholder="Soyadınızı girin" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">E-posta</label>
              <Input type="email" placeholder="E-posta adresinizi girin" required />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Mesajınız</label>
              <Textarea placeholder="Mesajınızı yazın" required />
            </div>
            <Button className="w-full bg-[#5D8736] hover:bg-[#4a6d2c]">
              Gönder
            </Button>
          </form>
        </div>
    </main>
  );
}
