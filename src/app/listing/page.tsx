"use client";
import { Navbar } from "@/components/navbar";
import { Lora } from "next/font/google";
import { Settings2 } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

export default function ListingPage() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <main className={`${lora.variable} font-serif min-h-screen relative`}>
      <Navbar />
      {/* Hero Section */}
      <div className="relative">
        {/* Gradasi hanya untuk Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-transparent opacity-30 z-0"></div>

        <div className="container mx-auto px-6 py-40 md:px-3 md:py-1 relative z-10">
          <div className="flex flex-col md:flex-row justify-center">
            {/* Mobileview: Image  */}
            <div className="w-full  flex items-center justify-center mb-2 md:hidden">
              <div className="relative w-full h-80 md:h-auto">
                <Image
                  src="https://raw.githubusercontent.com/Bimbim15/lolhuman/921fbd56bbfceb893809fda8f1596649351e9417/css/Screenshot%20From%202025-06-06%2017-22-26.png"
                  alt="Why Choose Us Image"
                  layout="responsive"
                  width={700}
                  height={500}
                  objectFit="cover"
                  className="shadow-lg rounded-2xl"
                />
              </div>
            </div>
            {/* Left Side: Content like in the screenshot */}
            <div className="w-full md:w-1/2 flex flex-col px-6 md:px-5 text-center md:text-start space-y-6 md:justify-center md:items-start">
              <h1 className="text-2xl md:text-5xl font-semibold mb-4">
                Cari Properti? Temukan disini sekarang juga!
              </h1>
              {/* Tabs Listing Category */}
              <div className="flex mt-1.5 items-center justify-center text-center md:mt-10">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`py-1 md:py-2 px-1 md:px-2 text-md md:text-lg font-semibold  ${
                    activeTab === 1
                      ? "border-b-1 md:border-b-2 border-yellow-500"
                      : ""
                  }`}
                >
                  Lelang
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`py-1 md:py-2 px-1 md:px-2 text-md md:text-lg font-semibold ${
                    activeTab === 2
                      ? "border-b-1 md:border-b-2 border-yellow-500"
                      : ""
                  }`}
                >
                  Cessie
                </button>
                <button
                  onClick={() => setActiveTab(3)}
                  className={`py-1 md:py-2 px-1 md:px-2 text-md md:text-lg font-semibold  ${
                    activeTab === 3
                      ? "border-b-1 md:border-b-2 border-yellow-500"
                      : ""
                  }`}
                >
                  Jual AJB
                </button>
                <button
                  onClick={() => setActiveTab(4)}
                  className={`py-1 md:py-2 px-1 md:px-2 text-md md:text-lg font-semibold ${
                    activeTab === 4
                      ? "border-b-1 md:border-b-2 border-yellow-500"
                      : ""
                  }`}
                >
                  Sewa
                </button>
              </div>
              {/* Tab Content */}
              {activeTab === 1 && (
                // Search Filter Section Lelang
                <div className="container shadow-md mx-auto w-full">
                  <form className="max-w-4xl mx-auto">
                    <div className="relative flex items-center w-full">
                      <div className="hidden md:absolute md:inset-y-0 md:start-0 md:flex md:items-center md:ps-3 md:pointer-events-none">
                        <svg
                          className="w-6 h-6 text-gray-500 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 md:p-6 pl-1 md:pl-14 text-sm md:text-md rounded-lg md:rounded-none text-gray-900 border border-gray-300 bg-gray-50 f dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        placeholder="Rumah Dilelang Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-0 md:py-2 px-1 md:px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-1.5 md:px-4 py-0 md:py-2 bg-yellow-400 hover:bg-yellow-500 "
                        >
                          Cari
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {activeTab === 2 && (
                // Search Filter Section Lelang
                <div className="container shadow-md mx-auto w-full">
                  <form className="max-w-4xl mx-auto">
                    <label
                      id="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative flex items-center w-full">
                      <div className="hidden md:absolute md:inset-y-0 md:start-0 md:flex md:items-center md:ps-3 md:pointer-events-none">
                        <svg
                          className="w-6 h-6 text-gray-500 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 md:p-6 pl-1 md:pl-14 text-sm md:text-md rounded-lg md:rounded-none text-gray-900 border border-gray-300 bg-gray-50 f dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        placeholder="Cessie Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-0 md:py-2 px-1 md:px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-1.5 md:px-4 py-0 md:py-2 bg-yellow-400 hover:bg-yellow-500 "
                        >
                          Cari
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {activeTab === 3 && (
                // Search Filter Section Lelang
                <div className="container shadow-md mx-auto w-full">
                  <form className="max-w-4xl mx-auto">
                    <label
                      id="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative flex items-center w-full">
                      <div className="hidden md:absolute md:inset-y-0 md:start-0 md:flex md:items-center md:ps-3 md:pointer-events-none">
                        <svg
                          className="w-6 h-6 text-gray-500 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 md:p-6 pl-1 md:pl-14 text-sm md:text-md rounded-lg md:rounded-none text-gray-900 border border-gray-300 bg-gray-50 f dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        placeholder="Rumah Dijual Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-0 md:py-2 px-1 md:px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-1.5 md:px-4 py-0 md:py-2 bg-yellow-400 hover:bg-yellow-500 "
                        >
                          Cari
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {activeTab === 4 && (
                // Search Filter Section Lelang
                <div className="container shadow-md mx-auto w-full">
                  <form className="max-w-4xl mx-auto">
                    <label
                      id="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative flex items-center w-full">
                      <div className="hidden md:absolute md:inset-y-0 md:start-0 md:flex md:items-center md:ps-3 md:pointer-events-none">
                        <svg
                          className="w-6 h-6 text-gray-500 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 md:p-6 pl-1 md:pl-14 text-sm md:text-md rounded-lg md:rounded-none text-gray-900 border border-gray-300 bg-gray-50 f dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        placeholder="Rumah Disewa Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-0 md:py-2 px-1 md:px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-1.5 md:px-4 py-0 md:py-2 bg-yellow-400 hover:bg-yellow-500 "
                        >
                          Cari
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
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

            {/* Right Side Webview: Image  */}
            <div className="hidden md:w-1/2 md:flex md:justify-end md:mt-2">
              <div className="relative w-full h-80 md:h-auto">
                <Image
                  src="https://raw.githubusercontent.com/Bimbim15/lolhuman/921fbd56bbfceb893809fda8f1596649351e9417/css/Screenshot%20From%202025-06-06%2017-22-26.png"
                  alt="Why Choose Us Image"
                  layout="responsive"
                  width={700}
                  height={500}
                  objectFit="cover"
                  className="shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section (No Gradient) */}
      <section className="container mx-auto px-6 mt-35">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Bagaimana Caranya Temukan Properti Impianmu?
        </h1>
        <p className="text-md md:text-xl text-center mt-3">
          3 Langkah Menuju Properti Impianmu
        </p>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg flex flex-col text-center items-center">
            <div className="bg-yellow-500 px-3 p-3 items-center justify-center">
              <Image
                src="https://raw.githubusercontent.com/Bimbim15/lolhuman/bb07fca4b93b0832af25e7ea818322aa3903e8d7/css/Vector%20(3).svg"
                alt="Step 1"
                width={50}
                height={50}
                className=""
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-4">
              Pilih Properti
            </h2>
            <p className="text-sm md:text-md mt-2 px-20">
              Ribuan properti terbaik yang telah melalui proses verifikasi
              Prop2Go API
            </p>
          </div>
          <div className="p-6 rounded-lg flex flex-col text-center items-center">
            <div className="bg-yellow-500 px-3 p-3 items-center justify-center">
              <Image
                src="https://raw.githubusercontent.com/Bimbim15/lolhuman/bb07fca4b93b0832af25e7ea818322aa3903e8d7/css/Vector%20(2).svg"
                alt="Step 1"
                width={50}
                height={50}
                className=""
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-4">
              Hubungi Kami
            </h2>
            <p className="text-sm md:text-md mt-2 px-20">
              Tim profesional dan berpengalaman tinggi siap membantu anda
            </p>
          </div>
          <div className="p-6 rounded-lg flex flex-col text-center items-center">
            <div className="bg-yellow-500 px-3 p-3 items-center justify-center">
              <Image
                src="https://raw.githubusercontent.com/Bimbim15/lolhuman/bb07fca4b93b0832af25e7ea818322aa3903e8d7/css/Vector%20(1).svg"
                alt="Step 1"
                width={50}
                height={10}
                className=""
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-4">
              Terima Kunci
            </h2>
            <p className="text-sm md:text-md mt-2 px-20">
              Survey, Deal, Terima Kunci. Kami memberikan segala kemudahannya
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
