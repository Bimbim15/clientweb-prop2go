"use client";
import { Navbar } from "@/components/navbar";
import { Lora } from "next/font/google";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

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
        block: "start", // Align at the top
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
            <div className=" p-6 rounded-lg flex flex-col items-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v12m-7-7h14"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Jual AJB</h3>

              <div className="mt-4 text-yellow-400">→</div>
            </div>

            {/* Card 4: Sewa */}
            <div className="bg-black p-6 rounded-lg flex flex-col items-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11v2M5 11v2m7 7v2m-7-4v-2m14 0V9m-7-7v2m7 3V2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Sewa</h3>

              <div className="mt-4 text-yellow-400">→</div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Lelang */}
            <div
              className="cursor-pointer shadow-xl border border-black dark:border-white rounded-md flex flex-col items-center transition-all duration-300 relative"
              onClick={() => alert("Card Lelang clicked")} // Placeholder for the click action
            >
              {/* Image - Positioned Top Left, Adjusted for Mobile */}
              <div className="absolute top-4 left-4 sm:left-4 md:left-4 lg:left-4">
                <img
                  src="https://github.com/Bimbim15/lolhuman/blob/master/css/Vector%20(3).png?raw=true"
                  alt="Gavel Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" // Smaller size on mobile
                />
              </div>

              {/* Text "Lelang" - Centered Below the Image */}
              <h3 className="text-xl sm:text-2xl font-semibold absolute bottom-10 left-0 right-0 text-center">
                Lelang
              </h3>

              {/* Chevron Icon - Positioned Bottom Right */}
              <div className="absolute bottom-4 right-4">
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />{" "}
                {/* Adjusted size for mobile */}
              </div>
            </div>

            {/* Card 2: Cessie */}
            <div
              className="cursor-pointer shadow-xl border border-black dark:border-white rounded-md flex flex-col items-center transition-all duration-300 relative"
              onClick={() => alert("Card Lelang clicked")} // Placeholder for the click action
            >
              <div className="absolute top-4 left-4">
                <img
                  src="https://github.com/Bimbim15/lolhuman/blob/master/css/Vector%20(2).png?raw=true"
                  alt="Gavel Icon"
                  className="w-16 h-16 object-contain" // Set appropriate size for the image
                />
              </div>
              <h3 className="text-2xl font-semibold absolute mt-30">Cessie</h3>{" "}
              <div className="absolute text-center mt-14 right-4">
                <ChevronRight className="w-10 h-10" />
              </div>
            </div>

            {/* Card 3: Jual AJB */}
            <div className="bg-black p-6 rounded-lg flex flex-col items-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v12m-7-7h14"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Jual AJB</h3>

              <div className="mt-4 text-yellow-400">→</div>
            </div>

            {/* Card 4: Sewa */}
            <div className="bg-black p-6 rounded-lg flex flex-col items-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11v2M5 11v2m7 7v2m-7-4v-2m14 0V9m-7-7v2m7 3V2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Sewa</h3>

              <div className="mt-4 text-yellow-400">→</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
