"use client";
import { Navbar } from "@/components/navbar";
import { Lora } from "next/font/google";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Footer } from "@/components/footer";

const bankLogos = [
  {
    src: "https://raw.githubusercontent.com/Bimbim15/lolhuman/6f2d72694820f4b8e29ae2472aa2404eabd74acb/css/lobo%20bank2%202.png",
    alt: "BANK BRI",
    bgColor: "bg-cyan-300",
  },
  {
    src: "https://raw.githubusercontent.com/Bimbim15/lolhuman/6f2d72694820f4b8e29ae2472aa2404eabd74acb/css/logo%20bank1%201.png",
    alt: "OCBC",
    bgColor: "bg-pink-300",
  },
  {
    src: "https://raw.githubusercontent.com/Bimbim15/lolhuman/6f2d72694820f4b8e29ae2472aa2404eabd74acb/css/logo%20bank%201.png",
    alt: "Mandiri",
    bgColor: "bg-blue-200",
  },
  {
    src: "https://raw.githubusercontent.com/Bimbim15/lolhuman/6f2d72694820f4b8e29ae2472aa2404eabd74acb/css/logo%20bank4%201.png",
    alt: "OK ASSET",
    bgColor: "bg-yellow-200",
  },
  {
    src: "https://raw.githubusercontent.com/Bimbim15/lolhuman/6f2d72694820f4b8e29ae2472aa2404eabd74acb/css/Logo%20bank5%201.png",
    alt: "J TRUST BANK",
    bgColor: "bg-blue-100",
  },
];

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

export default function LayananPage() {
  const [scrolling, setScrolling] = useState(false);

  

  // Detect scroll to trigger animation
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Function to scroll to the 'detail-layanan' section smoothly
  const scrollToDetail = () => {
    const detailSection = document.getElementById("detail-layanan");
    if (detailSection) {
      detailSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`${lora.variable} font-serif relative min-h-screen`}>
      <Navbar />
      {/* Hero layanan Section */}
      <section
        className="container mx-auto relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://github.com/Bimbim15/lolhuman/blob/master/css/Screen%20Shot%202025-05-09%20at%2012.32.24%20PM%201.png?raw=true')",
        }}
      >
        <div className="absolute bg-black inset-0 opacity-50 md:opacity-40"></div>
        <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-semibold italic leading-tight tracking-tight mb-4 sm:mb-6">
              Nikmati layanan Eksklusivitas dan Kenyamanan dalam Setiap
              Transaksi Properti Anda.
            </h1>
            <p className="text-base md:text-xl font-light sm:leading-relaxed">
              Dengan layanan yang eksklusif dan dedikasi penuh, kami memastikan
              setiap transaksi berjalan lancar, nyaman, dan sesuai dengan impian
              Anda.
            </p>
          </div>
        </div>
        {/* Chevron icon */}
        <div
          className={`absolute bottom-10 w-full flex justify-center items-center transition-transform duration-300 ${
            scrolling ? "opacity-0" : "opacity-100"
          }`}
          style={{ zIndex: 9999 }} // Ensure it's above all other elements
        >
          <div
            className="w-10 h-10 rounded-full bg-white flex justify-center items-center p-2 animate-bounce"
            style={{ cursor: "pointer" }} // Ensures pointer cursor
            onClick={scrollToDetail} // Make sure it triggers the smooth scroll
          >
            <svg
              className="w-6 h-6 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* Detail Layanan Section */}
      <section id="detail-layanan" className=" container mx-auto py-12 px-6">
        <h2 className="italic text-3xl md:text-4xl text-center font-semibold mb-8 flex items-center justify-center">
          <span className="w-1 h-8 bg-yellow-400 mr-4"></span> Layanan Kami
        </h2>
        <div className="block sm:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Lelang */}
            <div
              className=" p-6 rounded-lg flex flex-col items-center cursor-pointer shadow-xl border border-black dark:border-white transition-all duration-300 relative"
              onClick={() => alert("Card Lelang clicked")}
            >
              <div className="mb-4">
                <img
                  src="https://github.com/Bimbim15/lolhuman/blob/master/css/Vector%20(3).png?raw=true"
                  alt="Gavel Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" // Smaller size on mobile
                />
              </div>
              <h3 className="text-xl font-semibold">Lelang</h3>

              <div className="mt-4">
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />{" "}
              </div>
            </div>

            {/* Card 2: Cessie */}
            <div
              className=" p-6 rounded-lg flex flex-col items-center cursor-pointer shadow-xl border border-black dark:border-white transition-all duration-300 relative"
              onClick={() => alert("Card Cessie clicked")}
            >
              <div className="mb-4">
                <img
                  src="https://github.com/Bimbim15/lolhuman/blob/master/css/Vector%20(2).png?raw=true"
                  alt="Gavel Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" // Smaller size on mobile
                />
              </div>
              <h3 className="text-xl font-semibold">Cessie</h3>

              <div className="mt-4">
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />{" "}
              </div>
            </div>
            {/* Card 3: Jual AJB */}
            <div
              className=" p-6 rounded-lg flex flex-col items-center cursor-pointer shadow-xl border border-black dark:border-white transition-all duration-300 relative"
              onClick={() => alert("Card Cessie clicked")}
            >
              <div className="mb-4">
                <img
                  src="https://raw.githubusercontent.com/Bimbim15/lolhuman/f051a7d889dc64aab1fb760a081ec3ebba6e852c/css/Group%2054.png"
                  alt="Gavel Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" // Smaller size on mobile
                />
              </div>
              <h3 className="text-xl font-semibold">Jual AJB</h3>

              <div className="mt-4">
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />{" "}
              </div>
            </div>
            {/* Card 4: Sewa */}
            <div
              className=" p-6 rounded-lg flex flex-col items-center cursor-pointer shadow-xl border border-black dark:border-white transition-all duration-300 relative"
              onClick={() => alert("Card Cessie clicked")}
            >
              <div className="mb-4">
                <img
                  src="https://raw.githubusercontent.com/Bimbim15/lolhuman/f051a7d889dc64aab1fb760a081ec3ebba6e852c/css/Vector%20(4).png"
                  alt="Gavel Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Sewa</h3>

              <div className="mt-4">
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Lelang */}
            <div
              className="bg-black text-white cursor-pointer shadow-xl border border-black dark:border-white rounded-md flex flex-col items-center transition-all duration-300 relative"
              onClick={() => alert("Card Lelang clicked")} // Placeholder for the click action
            >
              {/* Image - Positioned Top Left, Adjusted for Mobile */}
              <div className="absolute top-4 left-4 sm:left-4 md:left-4 lg:left-4">
                <img
                  src="https://github.com/Bimbim15/lolhuman/blob/master/css/Vector%20(3).png?raw=true"
                  alt="Gavel Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-13 md:h-13 object-contain" // Smaller size on mobile
                />
              </div>

              {/* Text "Lelang" - Centered Below the Image */}
              <h3 className="text-xl sm:text-xl font-semibold mt-20">Lelang</h3>

              {/* Chevron Icon - Positioned Bottom Right */}
              <div className="absolute text-center mt-14 right-4">
                <ChevronRight className="w-8 h-8 sm:w-8 sm:h-8" />{" "}
                {/* Adjusted size for mobile */}
              </div>
            </div>

            {/* Card 2: Cessie */}
            <div
              className="bg-black text-white cursor-pointer shadow-xl border border-black dark:border-white rounded-md flex flex-col items-center transition-all duration-300 relative"
              onClick={() => alert("Card Lelang clicked")} // Placeholder for the click action
            >
              <div className="absolute top-4 left-4">
                <img
                  src="https://github.com/Bimbim15/lolhuman/blob/master/css/Vector%20(2).png?raw=true"
                  alt="Gavel Icon"
                  className="w-13 h-13 object-contain" // Set appropriate size for the image
                />
              </div>
              <h3 className="text-xl font-semibold absolute mt-20">Cessie</h3>{" "}
              <div className="absolute text-center mt-14 right-4">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>

            {/* Card 3: Jual AJB */}
            <div
              className="bg-black text-white cursor-pointer shadow-xl border border-black dark:border-white rounded-md flex flex-col items-center transition-all duration-300 relative"
              onClick={() => alert("Card Lelang clicked")} // Placeholder for the click action
            >
              <div className="absolute top-4 left-4">
                <img
                  src="https://raw.githubusercontent.com/Bimbim15/lolhuman/f051a7d889dc64aab1fb760a081ec3ebba6e852c/css/Group%2054.png"
                  alt="Gavel Icon"
                  className="w-13 h-13 object-contain" // Set appropriate size for the image
                />
              </div>
              <h3 className="text-xl font-semibold absolute mt-20">Jual AJB</h3>{" "}
              <div className="absolute text-center mt-14 right-4">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>

            {/* Card 4: Sewa */}
            <div
              className="bg-black text-white cursor-pointer shadow-xl border border-black dark:border-white rounded-md flex flex-col items-center transition-all duration-300 relative"
              onClick={() => alert("Card Lelang clicked")} // Placeholder for the click action
            >
              <div className="absolute top-4 left-4">
                <img
                  src="https://raw.githubusercontent.com/Bimbim15/lolhuman/f051a7d889dc64aab1fb760a081ec3ebba6e852c/css/Vector%20(4).png"
                  alt="Gavel Icon"
                  className="w-13 h-13 object-contain" // Set appropriate size for the image
                />
              </div>
              <h3 className="text-xl font-semibold absolute mt-20">Sewa</h3>{" "}
              <div className="absolute text-center mt-14 right-4">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 py-10 md:px-3 md:py-20">
          <div className="flex flex-col md:flex-row justify-center">
            {/* Left Side: Text */}
            <div className="w-full md:w-1/2 flex flex-col px-6 text-center md:text-start space-y-2 md:justify-center">
              <h2 className="text-xl md:text-xl font-semibold mb-4 flex items-center">
                <span className="w-1 h-16 bg-yellow-400 mr-4"></span>
                Lelang Properti adalah Keunggulan kami dalam upaya memberikan
                properti impian anda dengan keuntungan maksimal.
              </h2>
              <p className="text-sm md:text-md font-medium mb-6 md:max-w-3xl mx-auto">
                Melalui lelang eksklusif kami, Anda bisa menemukan rumah atau
                investasi terbaik dengan potensi keuntungan besar. Setiap
                langkah dibimbing oleh tim profesional kami, memastikan proses
                lelang yang transparan dan nyaman. Jangan lewatkan peluang
                istimewa ini untuk berinvestasi cerdas dan hemat bersama kami
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 md:flex items-center justify-center md:justify-end mb-6 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/Bimbim15/lolhuman/065d51a31ae68d0651ddb96f2c2d62bc1e4b9b38/css/lelang%201.png"
                alt="Why Choose Us Image"
                className="w-full md:w-[100vh] h-auto object-cover shadow-lg "
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 py-10 md:px-3 md:py-20">
          <div className="flex flex-col md:flex-row justify-center">
            {/* Right Side: Image */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center md:justify-end mb-6 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/Bimbim15/lolhuman/065d51a31ae68d0651ddb96f2c2d62bc1e4b9b38/css/sale%201.png"
                alt="Why Choose Us Image"
                className="w-full md:w-[100vh] h-auto object-cover shadow-lg "
              />
            </div>
            {/* Left Side: Text */}
            <div className="w-full md:w-1/2 flex flex-col px-6 text-center md:text-start space-y-2 md:justify-center">
              <h2 className="text-xl md:text-xl font-semibold mb-4 flex items-center">
                <span className="w-1 h-10 md:h-6 bg-yellow-400 mr-4"></span>
                Titip Jual dan Sewa Properti bersama AssetHub
              </h2>
              <p className="text-sm md:text-md font-medium mb-6 md:max-w-3xl mx-auto">
                Kami memiliki jaringan yang luas, disertai dengan penetrasi
                pasar yang maksimal dan didukung oleh para profesional yang siap
                membantu transaksi jual dan sewa anda sampai dengan tuntas
              </p>
            </div>
            {/* Mobile view */}
            <div className="  items-center justify-center  mb-6 md:hidden">
              <img
                src="https://raw.githubusercontent.com/Bimbim15/lolhuman/065d51a31ae68d0651ddb96f2c2d62bc1e4b9b38/css/sale%201.png"
                alt="Why Choose Us Image"
                className="w-full md:w-[100vh] h-auto object-cover shadow-lg "
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 py-10 md:px-3 md:py-1">
          <h2 className="italic text-3xl md:text-3xl text-center font-semibold mb-8 flex">
            <span className="w-1 h-8 bg-yellow-400 mr-4"></span>History
            transaksi kami dalam angka:
          </h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-3.5">
              <div className="px-2 mb-4 sm:mb-0">
                <h1 className="font-semibold text-3xl sm:text-4xl relative">
                  <span className="bg-yellow-500 bg-opacity-70 rounded-lg px-1.5 py-0.5">
                    1
                  </span>
                  00 M+
                </h1>
                <p className="mt-2 text-sm sm:text-base">
                  Nilai transaksi lelang kami rata-rata setiap tahunnya
                </p>
              </div>
              <div className="px-2 mb-4 sm:mb-0">
                <h1 className="font-semibold text-3xl sm:text-4xl">
                  <span className="bg-yellow-500 bg-opacity-70 rounded-lg px-1.5 py-0.5">
                    1
                  </span>
                  000+ Properti
                </h1>
                <p className="mt-2 text-sm sm:text-base">
                  Jumlah properti yang terjual dan tersewa rata-rata melalui
                  lelang dengan kami setiap tahunnya
                </p>
              </div>
              <div className="px-2">
                <h1 className="font-semibold text-3xl sm:text-4xl">
                  <span className="bg-yellow-500 bg-opacity-70 rounded-lg px-1.5 py-0.5">
                    1
                  </span>
                  000+ Customer
                </h1>
                <p className="mt-2 text-sm sm:text-base">
                  Dengan kemampuan tim kami yang profesional dan berpengalaman
                  tinggi, kami berhasil melayani lebih dari 100 happy customer
                  setiap tahunnya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto container bg-white py-10">
        <h2 className="italic text-3xl md:text-5xl text-center font-bold mt-10 flex items-center justify-center text-black py-5">
          <span className="w-1 h-8 bg-yellow-400 mr-4"></span> Mitra Perbankan
          Kami
        </h2>
        <p className="text-center font-semibold text-gray-700 mb-8">
          Jaminan kemanan untuk setiap transaksi anda bersama kami
        </p>

        <EmblaCarousel
          slides={bankLogos}
          options={{ loop: true, align: "center" }}
        />
      </section>
      <Footer />
    </main>
  );
}
