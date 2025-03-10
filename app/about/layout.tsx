import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Rabia Sarıkaya | Blog",
  description: "Sağlıklı beslenme ve diyetle ilgili en güncel yazıları keşfedin.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden ">
      <Navbar bg="bg-white" />
      {children}
      <Footer />
    </div>
  );
}
