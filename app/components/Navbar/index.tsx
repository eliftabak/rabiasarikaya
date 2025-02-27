import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white py-6 px-8 flex justify-between items-center lg:px-14">
      <div>
        <h1 className="text-3xl font-dancing font-semibold tracking-wide">Rabia Sarıkaya</h1>
      </div>
      <div>
        <ul className="flex space-x-8 text-lg text-gray-700 font-light">
          <li>
            <Link href="/about" className="hover:text-[#5D8736] transition duration-300">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[#5D8736] transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#5D8736] transition duration-300">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
