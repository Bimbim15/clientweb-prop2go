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

        <div className="container mx-auto px-6 py-10 md:px-3 md:py-1 relative z-10">
          <div className="flex flex-col md:flex-row justify-center">
            {/* Left Side: Content like in the screenshot */}
            <div className="w-full md:w-1/2 flex flex-col px-6 md:px-5 text-center md:text-start space-y-6 md:justify-center md:items-start">
              <h1 className="text-2xl md:text-5xl font-semibold mb-4">
                Cari Properti? Temukan disini sekarang juga!
              </h1>
              {/* Tabs Listing Category */}
              <div className="flex mt-10">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`py-2 px-1 text-lg font-semibold  ${
                    activeTab === 1 ? "border-b-2 border-yellow-500" : ""
                  }`}
                >
                  Lelang
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`py-2 px-4 text-lg font-semibold  ${
                    activeTab === 2 ? "border-b-2 border-yellow-500" : ""
                  }`}
                >
                  Cessie
                </button>
                <button
                  onClick={() => setActiveTab(3)}
                  className={`py-2 px-4 text-lg font-semibold  ${
                    activeTab === 3 ? "border-b-2 border-yellow-500" : ""
                  }`}
                >
                  Jual AJB
                </button>
                <button
                  onClick={() => setActiveTab(4)}
                  className={`py-2 px-4 text-lg font-semibold ${
                    activeTab === 4 ? "border-b-2 border-yellow-500" : ""
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
                    <label
                      id="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative flex items-center w-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                        className="block w-full p-6 pl-14 text-md text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Rumah Dilelang Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-2 px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800"
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
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                        className="block w-full p-6 pl-14 text-md text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Cessie Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-2 px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800"
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
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                        className="block w-full p-6 pl-14 text-md text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Rumah Dijual Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-2 px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800"
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
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                        className="block w-full p-6 pl-14 text-md text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Rumah Disewa Jakarta"
                        required
                      />
                      <div className="flex items-center absolute right-0 pr-4  space-x-2">
                        <button className="bg-gray-100 text-black py-2 px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                          <span className="font-semibold text-sm">Filter</span>
                          <Settings2 className="ml-2 text-sm" size={14} />
                        </button>
                        <button
                          type="submit"
                          className="text-black font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800"
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

            {/* Right Side: Image with gradient */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mb-6 md:mt-2">
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
    </main>
  );
}
