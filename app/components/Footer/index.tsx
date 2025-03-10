import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#5D8736] text-white py-10">
      <div className="container mx-auto px-6 text-center space-y-4">
        <h2 className="text-xl font-semibold font-sniglet">Diyetisyen Rabia Sarıkaya</h2>
        <div className="flex justify-center space-x-8 text-2xl">
          <Link href="https://www.instagram.com/i.am_rabiaa" target="_blank" aria-label="Instagram">
            <FaInstagram className="hover:text-[#F8FFDD] transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/rabia-sar%C4%B1kaya-632a081b3/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-[#F8FFDD] transition duration-300" />
          </Link>
          <Link href={`mailto:rabiasarikaya86@gmail.com`} aria-label="E-Mail">
            <FaEnvelope className="hover:text-[#F8FFDD] transition duration-300" />
          </Link>
        </div>
        <p className="text-xs text-gray-200">
          © {new Date().getFullYear()} Rabia Sarıkaya | Tüm Hakları Saklıdır.
        </p>
        <div className="border-t border-gray-300 opacity-30 w-4/5 mx-auto my-4"></div>
        <div className="font-sniglet">
          <p className="text-md">
            made with 🤍 by <Link href="https://www.instagram.com/withelif.web/" className="font-bold text-white hover:text-[#F8FFDD]">@withelif.web</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
