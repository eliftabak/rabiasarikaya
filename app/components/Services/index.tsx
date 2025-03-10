import Image from "next/image";

type Service = {
	title: string;
	description: string;
	icon: string; 
};

const services: Service[] = [
  {
    title: "Kilo Kontrolü",
    description: "Kişiye özel diyet programları ile sağlıklı kilo yönetimi.",
    icon: "/icons/scale.png",
  },
  {
    title: "Sporcu Beslenmesi",
    description: "Performansınızı artıran özel beslenme programları.",
    icon: "/icons/sport.png",
  },
  {
    title: "Hastalık Diyetleri",
    description: "Diyabet, tansiyon gibi sağlık sorunlarına özel diyetler.",
    icon: "/icons/health.png",
  },
  {
    title: "Gebelik ve Emzirme Beslenmesi",
    description: "Hamilelik ve emzirme döneminde sağlıklı ve dengeli beslenme desteği.",
    icon: "/icons/pregnancy.png",
  },
  {
    title: "Bağışıklık Güçlendirme Diyetleri",
    description: "Hastalıklara karşı direnç artıran özel beslenme programları.",
    icon: "/icons/immunity.png",
  },
  {
    title: "Çocuk Beslenmesi",
    description: "Çocuklar için sağlıklı büyüme ve gelişimi destekleyen özel programlar.",
    icon: "/icons/kids.png",
  },
];


const Services = () => {
	return (
		<div className="pt-62 pb-16 px-8 lg:px-24 text-center lg:pt-20 xl:pt-40">
			<h2 className="text-4xl lg:px-10 pb-6 font-sniglet font-bold text-[#1F3B08]">
				Hizmetlerim
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-8">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-[#f8dadc] p-6 rounded-4xl lg:flex gap-2 text-left items-center"
					>
						<div>
							<Image
								src={service.icon}
								alt={service.title}
                width={52}
                height={52}
								className="mb-4"
							/>
						</div>
						<div>
							<h3 className="text-2xl font-semibold font-sniglet text-[#1F3B08]">
								{service.title}
							</h3>
							<p className="text-md">{service.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
