'use client'
import { Navbar } from "@/components/navbar"
import { Settings2 } from "lucide-react";

import { useState } from "react";
export default function PortofolioPage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main className="">
      <Navbar />
      <div className="container mt-10 shadow-md mx-auto py-6 mr-5 px-2 w-full">
        <form className="max-w-4xl mx-auto">
          {" "}
          {/* Memperbesar lebar form */}
          <label
            id="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative flex items-center w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-black"
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
              className="block w-full p-6 pl-14 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <div className="flex items-center absolute right-0 pr-4 bottom-2.5 space-x-2">
              <button className="bg-gray-100 text-black py-2 px-5 rounded-l-lg hover:bg-gray-200 flex items-center">
                <span className="font-semibold text-sm">Filter</span>
                <Settings2 className="ml-2 text-sm" size={14} />
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full max-w-md mx-auto">
        {/* Tab Navigation */}
        <div className="flex">
          <button
            onClick={() => setActiveTab(1)}
            className={`py-2 px-4 text-lg font-semibold text-gray-600 ${
              activeTab === 1 ? "border-b-4 border-yellow-500" : ""
            }`}
          >
            Lelang
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`py-2 px-4 text-lg font-semibold text-gray-600 ${
              activeTab === 2 ? "border-b-4 border-yellow-500" : ""
            }`}
          >
            Cessie
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`py-2 px-4 text-lg font-semibold text-gray-600 ${
              activeTab === 3 ? "border-b-4 border-yellow-500" : ""
            }`}
          >
            Jual AJB
          </button>
          <button
            onClick={() => setActiveTab(4)}
            className={`py-2 px-4 text-lg font-semibold text-gray-600 ${
              activeTab === 4 ? "border-b-4 border-yellow-500" : ""
            }`}
          >
            Sewa
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === 1 && (
            <h1 className="text-2xl font-bold">Ini Konten Lelang</h1>
          )}
          {activeTab === 2 && (
            <h1 className="text-2xl font-bold">Ini Konten Cessie</h1>
          )}
          {activeTab === 3 && (
            <h1 className="text-2xl font-bold">Ini Konten Jual AJB</h1>
          )}
          {activeTab === 4 && (
            <h1 className="text-2xl font-bold">Ini Konten Sewa</h1>
          )}
        </div>
      </div>
    </main>
  );
}
