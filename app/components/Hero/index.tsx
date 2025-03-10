import Image from "next/image";
import Link from "next/link";
import RotatingImage from "../RotatingImage";

const Hero = () => {
	return (
		<div className="bg-[#F8FFDD] px-6 pb-68 lg:pt-24 lg:pb-52 lg:px-24 text-center flex items-stretch justify-center relative">
			<div className="container xl:max-w-4xl z-20">
				<h1 className="text-6xl md:text-7xl font-bold text-[#1F3B08] font-sniglet leading-tight xl:text-7xl">
					Sağlıklı Yaşam için Doğru Beslenme
				</h1>
				<p className="mt-6 text-xl text-gray-700">
					Bireysel beslenme programlarıyla hayatınızı değiştirin ve daha
					sağlıklı bir yaşama adım atın.
				</p>
				<Link href="/contact">
					<button className="mt-8 bg-[#c1df5d] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#375A1D] hover:text-[#c1df5d] cursor-pointer">
						Danışmanlık Al
					</button>
				</Link>
			</div>
			<div className="absolute -bottom-50 right-0 lg:left-96 xl:left-10 lg:right-0 z-0">
				<RotatingImage src="/images/dietfood.png" className="w-[450px] h-[480px]" />
				<Image src={'/images/healthy.png'} className="absolute top-10 -left-3 lg:left-5" alt="Hero Image" width={400} height={400} />
			</div>
			<div className="-mt-10">
			<Image src={'/images/hero-img.png'} className="hidden lg:block" alt="Hero Image" width={650} height={400} />
			</div>
		</div>
	);
};

export default Hero;
