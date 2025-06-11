"use client";
import { Lora } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Using Chevron Icons
import { Footer } from "@/components/footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

const testimonials = [
  {
    name: "Cameron Williamson",
    title: "Investor",
    description:
      "Searches for multiplexes, property comparisor estimator. Works great. Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor incididunt dolores.",
    avatarImage:
      "https://github.com/Bimbim15/lolhuman/blob/master/css/test1.png.png?raw=true", // Avatar image
    largeImage:
      "https://github.com/Bimbim15/lolhuman/blob/master/css/h62.png?raw=true", // Large image for right side
  },
  {
    name: "Asep Taylor",
    title: "Real Estate Expert",
    description:
      "Real estate solutions that bring long-term value and investment returns. Expertise in maximizing ROI in property investments.",
    avatarImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsux_IqwC3gZEJZYmEoiRn3eBR6Mt9C6Gqg&s", // Avatar image
    largeImage: "https://f4.bcbits.com/img/0008333348_10.jpg", // Large image for right side
  },
];

const iframeVideos = [
  {
    title: "Video 1",
    url: "https://www.youtube.com/embed/hORK5DqiqJs?si=BK5AxPkpmwqdQPIF",
  },
  {
    title: "Video 2",
    url: "https://www.youtube.com/embed/RHO6w4v5pHA?si=yeQLC2QEEJZ31Ynt",
  },
  {
    title: "Video 3",
    url: "https://www.youtube.com/embed/QRmIbTw973U?si=a7jQHwhbQ16Ermj4",
  },
  {
    title: "Video 4",
    url: "https://www.youtube.com/embed/khoME04hpZo?si=jJgwG7lyS88jOUCh",
  },
  {
    title: "Video 5",
    url: "https://www.youtube.com/embed/cdbsRosg9B4?si=yG9a9hq6iBc6bacp",
  },
  {
    title: "Video 6",
    url: "https://www.youtube.com/embed/7nlUVivVIYs?si=7zJVL_yiJ-VKgpaM",
  },
  {
    title: "Video 7",
    url: "https://www.youtube.com/embed/MELBqItLZOk?si=8ienQYuyMH0L-TaG",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevYt = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? iframeVideos.length - 1 : prev - 1
    );
  };

  const handleNextYt = () => {
    setCurrentVideoIndex((prev) =>
      prev === iframeVideos.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className={`${lora.variable} font-serif relative min-h-screen`}>
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-12">
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-4 pt-15">
          <h1 className="text-4xl font-semibold italic leading-tight tracking-tight mb-4">
            “Investasi Properti Itu Mudah Dan Aman Jika Bersama Kami”
          </h1>
          <h2 className="text-3xl font-semibold mb-4">ASSETHUB</h2>
          <p className="sm:pr-1 text-xl font-medium mb-3 max-w-lg mx-auto md:mx-0">
            Semua orang bisa berinvestasi Properti dimana saja, tapi mencari
            kemudahan dan keamanan dengan potensi profit yang tinggi adalah
            ambisi kami dalam memberikan layanan kepada anda.
          </p>
          <p className="text-base font-normal mb-3 max-w-lg mx-auto md:mx-0">
            Temukan Pilihan Investasi Properti Anda dengan Kami Sekarang....
          </p>
          <Button className="w-36 bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg">
            Masuk / Daftar
          </Button>
          <p className="text-smd font-normal text-center mt-4">
            Team profesional kami siap membantu anda.
          </p>
          <div className="mt-1 flex items-center justify-center space-x-4">
            <div className="flex space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Team member 1"
                className="w-10 h-10 rounded-full border-2 border-yellow-400"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team member 2"
                className="w-10 h-10 rounded-full border-2 border-yellow-400"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Team member 3"
                className="w-10 h-10 rounded-full border-2 border-yellow-400"
              />
            </div>
            <span className="text-sm font-normal">CS Online Kami</span>
          </div>
        </div>

        {/* Right Side: Image with Blur Effect */}
        <div className="md:w-2/3 flex items-center justify-center md:justify-end">
          <img
            src="https://raw.githubusercontent.com/Bimbim15/lolhuman/master/css/invest%20prop%201.png"
            alt="Hero Image"
            className=" sm:h-[110vh] object-cover object-center filter sm:blur-[3px]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-6 py-10 md:px-3 md:py-1">
        <div className="flex flex-col md:flex-row justify-center">
          {/* Left Side: Image */}
          <div className="hidden md:w-1/2 md:flex items-center justify-center md:justify-end mb-6 md:mb-0">
            <img
              src="https://github.com/Bimbim15/lolhuman/blob/master/css/h61.jpg.png?raw=true"
              alt="Why Choose Us Image"
              className="w-full md:w-[150vh] h-auto object-cover shadow-lg "
            />
          </div>

          {/* Right Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col px-6 md:px-10 text-center md:text-start space-y-2 md:justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Kenapa Anda Harus Memilih Kami!
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6 md:max-w-3xl mx-auto">
              Dengan tim yang memiliki pengalaman dan jam terbang yang tinggi,
              kami akan memberikan Solusi Investasi Properti yang maksimal
              dengan pendampingan profesional.
            </p>

            {/* Grid for Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Lelang Properti</h3>
                <p className="text-sm mb-4">
                  Temukan pilihan aset lelang properti dengan keuntungan
                  maksimal.
                </p>
                <Button className="w-36 bg-yellow-400 hover:bg-yellow-500 shadow-lg">
                  Masuk
                </Button>
              </div>

              <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-black">
                <h3 className="text-lg font-semibold mb-4">
                  Dipercaya Ribuan Customer
                </h3>
                <p className="text-sm mb-4">
                  Dengan pengalaman lebih dari satu dekade, kami telah melayani
                  ribuan customer yang happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kata Mereka Section */}
      <div className="container mx-auto px-6 py-8 md:px-30 md:py-15">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side: Avatar, Name, Job, Testimonial */}
          <div className="md:w-1/2 md:px-4 flex flex-col justify-end space-y-6 md:mt-10">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonials[currentIndex].avatarImage}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm ">{testimonials[currentIndex].title}</p>
              </div>
            </div>
            <p className="text-lg ">{testimonials[currentIndex].description}</p>
            <div className="flex space-x-4 mt-2 justify-start">
              <Button
                onClick={handlePrev}
                className="w-16 h-8 bg-transparent border-1 border-black dark:border-white text-black dark:text-white rounded-xl flex items-center justify-center"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleNext}
                className="w-16 h-8 bg-transparent border-1 border-black dark:border-white text-black dark:text-white rounded-xl flex items-center justify-center"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          {/* Right Side: Full Image */}
          <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
            <img
              src={testimonials[currentIndex].largeImage}
              alt={testimonials[currentIndex].name}
              className="w-full md:w-3/4 h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* Youtube Content section */}
      <div className="container mx-auto px-6 py-8 md:px-30 md:py-15">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side: Description Content Youtube */}
          <div className="md:w-1/2 md:px-4 flex flex-col justify-end space-y-6 md:mt-10">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="youtube"
                className="w-10 h-8 "
              />
              <div>
                <h3 className="text-xl font-semibold">Prop2Go API</h3>
                <p className="text-sm">Podcast</p>
              </div>
            </div>
            <p className="text-lg">
              Ikuti dan tonton terus channel Youtube kami dalam rangka
              memberikan edukasi tentang properti Lelang, Cessie, dan bagaimana
              cara mendapatkan keuntungan maksimal.
            </p>
          </div>
          {/* Right Side: Youtube Video */}
          <div className="md:w-1/2 flex flex-col items-center justify-center mt-0 md:mt-0">
            <iframe
              width="100%" // Full width of the container
              height="315"
              src={iframeVideos[currentVideoIndex].url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl" // Adding rounded corners with Tailwind
            ></iframe>
            {/* Video Navigation */}
            <div className="flex justify-center md:mt-4 space-x-4">
              <Button
                onClick={handlePrevYt}
                className="w-16 h-8 bg-transparent border-1 border-black dark:border-white text-black dark:text-white rounded-xl flex items-center justify-center"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleNextYt}
                className="w-16 h-8 bg-transparent border-1 border-black dark:border-white text-black dark:text-white rounded-xl flex items-center justify-center"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Ads VIP Section */}
      <div className="container mx-auto px-6 py-16 md:px-20 md:py-24 bg-black dark:bg-white border-t-1 border-yellow-500">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left Side: Text */}
          <div className="md:w-2/3 text-center md:text-left space-y-1">
            <h2 className="text-2xl font-semibold text-white dark:text-gray-900">
              Buka Akun Anda Sekarang Dan Jadilah VIP Member
            </h2>
            <p className="text-2xl font-semibold text-white dark:text-gray-900">
              Untuk Profit Investasi Terbaik dan Fitur Premium
            </p>
          </div>
          {/* Right Side: Button */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button className="w-36 h-12 bg-yellow-400 text-black hover:bg-yellow-500 rounded-full flex items-center justify-center space-x-2">
              <span>Daftar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  d="M10 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
