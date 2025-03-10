import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#5D8736] text-center mb-6">Hakkımda</h1>
      <div className="flex justify-center">
        <Image 
          src="/images/rabia.jpeg" 
          alt="Rabia Sarıkaya" 
          width={200} 
          height={200} 
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="mt-8 text-lg text-gray-700 space-y-6 text-center">
        <p>
          <strong>2024 yılında</strong> Bandırma Onyedi Eylül Üniversitesi Beslenme ve Diyetetik bölümünden mezun oldum. 
          Ayrıca <strong>Atatürk Üniversitesi Aşçılık bölümü</strong>nde eğitim alarak beslenme bilimi ile mutfak sanatını birleştirme fırsatı yakaladım.
        </p>
        <p>
          Spor yapmayı, <strong>aktif bir yaşam tarzını</strong> benimsemeyi ve sağlıklı beslenmeyi hayatımın merkezine koyuyorum. 
          Yeni ve <strong>lezzetli tarifler</strong> denemek benim için hem bir tutku hem de mesleğimi daha yaratıcı hale getiren bir alan.
        </p>
        <p>
          İnsanlara <strong>sağlıklı beslenme alışkanlıkları</strong> kazandırmak ve onlara ilham vermek için çalışıyorum.  
          Eğer siz de <strong>dinamik, yenilikçi ve insan odaklı</strong> bir diyetisyenle çalışmak isterseniz, 
          birlikte güzel sonuçlara imza atmaktan mutluluk duyarım.
        </p>
      </div>
    </main>
  );
}
