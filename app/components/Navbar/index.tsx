"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  bg?: string;
}

const Navbar = ({ bg = "bg-[#F8FFDD]" }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${bg} py-6 px-8 flex justify-between items-center lg:px-32`}>
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 text-lg text-gray-800">
        <Link href="/about" className="hover:text-[#5D8736] transition">Hakkımda</Link>
        <Link href="/blog" className="hover:text-[#5D8736] transition">Blog</Link>
        <Link href="/contact" className="hover:text-[#5D8736] transition">İletişim</Link>
      </nav>

      <button
        className="md:hidden text-[#5D8736]"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="relative z-50"
          >
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-[#F8FFDD] bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sliding Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }} 
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6 flex flex-col"
            >
              <button
                className="self-end text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
              {/* Mobile Menu Links */}
              <nav className="mt-6 space-y-4 text-lg text-gray-700">
                <Link href="/about" className="block hover:text-[#5D8736] transition">
                  Hakkımda
                </Link>
                <Link href="/blog" className="block hover:text-[#5D8736] transition">
                  Blog
                </Link>
                <Link href="/contact" className="block hover:text-[#5D8736] transition">
                  İletişim
                </Link>
              </nav>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
