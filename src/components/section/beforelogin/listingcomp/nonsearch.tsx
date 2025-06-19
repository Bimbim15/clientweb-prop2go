"use client";
import { useEffect, useState } from "react";
import { getTopMarketing } from "../../../../../services/marketing";
import { getCountProperty } from "../../../../../services/listing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Bed,
  Bath,
  Scaling,
  ChevronLeftIcon,
  ChevronRight,
  Home,
} from "lucide-react";
import { DotButton } from "@/components/ui/EmblaCarouselDotButton";

const propertyCategories = [
  {
    name: "Gudang",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/56b1b094ef5f65fe842b73b28764abcf55dbcfe3/css/Vector%20(5).svg",
    apiName: "gudang",
  },
  {
    name: "Ruko",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/56b1b094ef5f65fe842b73b28764abcf55dbcfe3/css/Vector%20(8).svg", // Example image URL for Ruko
    apiName: "ruko",
  },
  {
    name: "Apartment",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/56b1b094ef5f65fe842b73b28764abcf55dbcfe3/css/Vector%20(9).svg",
    apiName: "apart",
  },
  {
    name: "Perkantoran",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/56b1b094ef5f65fe842b73b28764abcf55dbcfe3/css/Vector%20(7).svg",
    apiName: "kantor",
  },
  {
    name: "Rumah",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/56b1b094ef5f65fe842b73b28764abcf55dbcfe3/css/Vector%20(10).svg",
    apiName: "rumah",
  },
  {
    name: "Hotel",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/56b1b094ef5f65fe842b73b28764abcf55dbcfe3/css/Vector%20(9).svg", // Example image URL
    apiName: "hotel",
  },
  {
    name: "Ex Pabrik",
    imageUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZhY3RvcnktaWNvbiBsdWNpZGUtZmFjdG9yeSI+PHBhdGggZD0iTTEyIDE2aC4wMSIvPjxwYXRoIGQ9Ik0xNiAxNmguMDEiLz48cGF0aCBkPSJNMyAxOWEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWOC41YS41LjUgMCAwIDAtLjc2OS0uNDIybC00LjQ2MiAyLjg0NEEuNS41IDAgMCAxIDE1IDEwLjV2LTJhLjUuNSAwIDAgMC0uNzY5LS40MjJMOS43NyAxMC45MjJBLjUuNSAwIDAgMSA5IDEwLjVWNWEyIDIgMCAwIDAtMi0ySDVhMiAyIDAgMCAwLTIgMnoiLz48cGF0aCBkPSJNOCAxNmguMDEiLz48L3N2Zz4=", // Example image URL
    apiName: "pabrik",
  },
  {
    name: "Tanah/Kavling",
    imageUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNjYWxpbmctaWNvbiBsdWNpZGUtc2NhbGluZyI+PHBhdGggZD0iTTEyIDNINWEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMnYtNyIvPjxwYXRoIGQ9Ik0xNCAxNUg5di01Ii8+PHBhdGggZD0iTTE2IDNoNXY1Ii8+PHBhdGggZD0iTTIxIDMgOSAxNSIvPjwvc3ZnPg==", // Example image URL
    apiName: "tanah",
  },
  {
    name: "Kostan",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/56b1b094ef5f65fe842b73b28764abcf55dbcfe3/css/Vector%20(6).svg", // Example image URL
    apiName: "kosan",
  },
  {
    name: "Office Space",
    imageUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1aWxkaW5nMi1pY29uIGx1Y2lkZS1idWlsZGluZy0yIj48cGF0aCBkPSJNNiAyMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjE4WiIvPjxwYXRoIGQ9Ik02IDEySDRhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMiIvPjxwYXRoIGQ9Ik0xOCA5aDJhMiAyIDAgMCAxIDIgMnY5YTIgMiAwIDAgMS0yIDJoLTIiLz48cGF0aCBkPSJNMTAgNmg0Ii8+PHBhdGggZD0iTTEwIDEwaDQiLz48cGF0aCBkPSJNMTAgMTRoNCIvPjxwYXRoIGQ9Ik0xMCAxOGg0Ii8+PC9zdmc+", // Example image URL
    apiName: "office",
  },
];

const cities = [
  {
    name: "Jakarta",
    properties: 1000,
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/018590a66de321dbb34df4a8376a1a5738f609a0/css/h61.jpg.svg",
    large: true, // Flag untuk Jakarta agar lebih besar
  },
  {
    name: "Bandung",
    properties: 200,
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/018590a66de321dbb34df4a8376a1a5738f609a0/css/h62.jpg.svg",
    large: false,
  },
  {
    name: "Surabaya",
    properties: 79,
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/018590a66de321dbb34df4a8376a1a5738f609a0/css/h63.jpg.svg",
    large: false,
  },
  {
    name: "Palembang",
    properties: 20,
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/018590a66de321dbb34df4a8376a1a5738f609a0/css/h64.jpg.svg",
    large: false,
  },
  {
    name: "Denpasar",
    properties: 19,
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/018590a66de321dbb34df4a8376a1a5738f609a0/css/h65.jpg.svg",
    large: false,
  },
];

const properties = [
  {
    id: 1,
    title: "Apartment Pakubuwono ",
    location: "Jakarta Selatan",
    type: "Lelang",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/4619c8234c00f20db5107078d8ff15a1164c7096/css/Link%20%E2%86%92%20p13-516x360.jpg.svg",
    beds: 4,
    baths: 2,
    area: 450,
    buildingarea: 250,
  },
  {
    id: 2,
    title: "Rumah Menteng",
    location: "Jakarta Pusat",
    type: "Cessie",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/4619c8234c00f20db5107078d8ff15a1164c7096/css/Link%20%E2%86%92%20p15-516x360.jpg.svg",
    beds: 4,
    baths: 2,
    area: 400,
    buildingarea: 200,
  },
  {
    id: 3,
    title: "Apartment Penthouse",
    location: "Bali",
    type: "Dijual",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/4619c8234c00f20db5107078d8ff15a1164c7096/css/Link%20%E2%86%92%20p16-516x360.jpg.svg",
    beds: 4,
    baths: 2,
    area: 450,
    buildingarea: 300,
  },
  {
    id: 4,
    title: "Apartment Bandung ",
    location: "Bandung",
    type: "Lelang",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/4619c8234c00f20db5107078d8ff15a1164c7096/css/Link%20%E2%86%92%20p13-516x360.jpg.svg",
    beds: 4,
    baths: 2,
    area: 450,
    buildingarea: 250,
  },
  {
    id: 5,
    title: "Rumah Bandung",
    location: "Bandung Pusat",
    type: "Cessie",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/4619c8234c00f20db5107078d8ff15a1164c7096/css/Link%20%E2%86%92%20p15-516x360.jpg.svg",
    beds: 4,
    baths: 2,
    area: 400,
    buildingarea: 200,
  },
  {
    id: 6,
    title: "Apartment Tasik",
    location: "Tasik",
    type: "Dijual",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/4619c8234c00f20db5107078d8ff15a1164c7096/css/Link%20%E2%86%92%20p16-516x360.jpg.svg",
    beds: 4,
    baths: 2,
    area: 450,
    buildingarea: 300,
  },
];

const titipJualSewaProperties = [
  {
    id: 1,
    title: "Pakubuwono Apartment",
    location: "Jakarta Selatan",
    type: "DIJUAL",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p13-516x360.jpg.png",
    beds: 4,
    baths: 2,
    area: 450,
    buildingarea: 300,
    price: "$280,000",
  },
  {
    id: 2,
    title: "Menteng Residence",
    location: "Jakarta Pusat",
    type: "DISEWA",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p16-516x360.jpg.png",
    beds: 3,
    baths: 2,
    area: 350,
    buildingarea: 250,
    price: "$1,500/month",
  },
  {
    id: 3,
    title: "Penthouse Bali",
    location: "Denpasar",
    type: "DIJUAL",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p17-516x360.jpg.png",
    beds: 5,
    baths: 3,
    area: 600,
    buildingarea: 400,
    price: "$450,000",
  },
  {
    id: 4,
    title: "Bandung Villa",
    location: "Bandung",
    type: "DISEWA",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p13-516x360.jpg.png",
    beds: 4,
    baths: 3,
    area: 500,
    buildingarea: 350,
    price: "$2,000/month",
  },
  {
    id: 5,
    title: "Surabaya Apartment",
    location: "Surabaya",
    type: "DIJUAL",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p16-516x360.jpg.png",
    beds: 3,
    baths: 2,
    area: 400,
    buildingarea: 300,
    price: "$320,000",
  },
  {
    id: 6,
    title: "Medan House",
    location: "Medan",
    type: "DISEWA",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p17-516x360.jpg.png",
    beds: 4,
    baths: 2,
    area: 450,
    buildingarea: 350,
    price: "$1,800/month",
  },
  {
    id: 7,
    title: "Yogyakarta Residence",
    location: "Yogyakarta",
    type: "DIJUAL",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p13-516x360.jpg.png",
    beds: 3,
    baths: 2,
    area: 380,
    buildingarea: 280,
    price: "$250,000",
  },
  {
    id: 8,
    title: "Semarang Apartment",
    location: "Semarang",
    type: "DISEWA",
    imageUrl:
      "https://raw.githubusercontent.com/Bimbim15/lolhuman/abab4ed53a73c7319fd89665219e3465ba04f173/css/Link%20%E2%86%92%20p16-516x360.jpg.png",
    beds: 2,
    baths: 1,
    area: 300,
    buildingarea: 200,
    price: "$1,200/month",
  },
];

export default function Nonsearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPageMobile = 1;
  const cardsPerPageWeb = 3;
  const [isMobile, setIsMobile] = useState(false);
  const [propertyCount, setPropertyCount] = useState(null);
  const [currentPageMobile, setCurrentPageMobile] = useState(1);
  const [currentPageWeb, setCurrentPageWeb] = useState(1);

  type Marketing = {
    _id: string;
    profile: string;
    firstName: string;
    lastName: string;
    totalRevenue: number;
    totalSales: number;
  };

  const [topMarketing, setTopMarketing] = useState<Marketing[]>([]);

  useEffect(() => {
    const fetchPropertyCount = async () => {
      const result = await getCountProperty();
      if (result.success) {
        setPropertyCount(result.data.data);
      } else {
        console.error("Failed to fetch property count:", result.error);
      }
    };

    fetchPropertyCount();
  }, []);

  // Merge API data (count) with propertyCategories
  const updatedCategories = propertyCategories.map((category) => {
    // Get the count for the category from the API response
    const apiCount = propertyCount ? propertyCount[category.apiName] : 0;

    return {
      ...category,
      count: apiCount,
    };
  });

  useEffect(() => {
    const fetchTopMarketingData = async () => {
      const result = await getTopMarketing();
      if (result.success) {
        setTopMarketing(result.data.data);
      } else {
      }
    };

    fetchTopMarketingData();
  }, []);

  // Pagination for Property Categories
  const cardsPerPageCategoriesMobile = 1;
  const cardsPerPageCategoriesWeb = 6;

  const totalPagesCategoriesMobile = Math.ceil(
    updatedCategories.length / cardsPerPageCategoriesMobile
  );
  const totalPagesCategoriesWeb = Math.ceil(
    updatedCategories.length / cardsPerPageCategoriesWeb
  );

  const handleNextMobile = () => {
    if (currentPageMobile < totalPagesCategoriesMobile) {
      setCurrentPageMobile(currentPageMobile + 1);
    }
  };

  const handlePrevMobile = () => {
    if (currentPageMobile > 1) {
      setCurrentPageMobile(currentPageMobile - 1);
    }
  };

  const handleNextWeb = () => {
    if (currentPageWeb < totalPagesCategoriesWeb) {
      setCurrentPageWeb(currentPageWeb + 1);
    }
  };

  const handlePrevWeb = () => {
    if (currentPageWeb > 1) {
      setCurrentPageWeb(currentPageWeb - 1);
    }
  };

  // Update cards to display based on pagination
  const startIndexCategoriesMobile =
    (currentPageMobile - 1) * cardsPerPageCategoriesMobile;
  const startIndexCategoriesWeb =
    (currentPageWeb - 1) * cardsPerPageCategoriesWeb;

  const currentCategoriesMobile = updatedCategories.slice(
    startIndexCategoriesMobile,
    startIndexCategoriesMobile + cardsPerPageCategoriesMobile
  );
  const currentCategoriesWeb = updatedCategories.slice(
    startIndexCategoriesWeb,
    startIndexCategoriesWeb + cardsPerPageCategoriesWeb
  );

  // Pagination for Property Week Recommend
  const totalPages = Math.ceil(
    properties.length / (isMobile ? cardsPerPageMobile : cardsPerPageWeb)
  );
  const startIndex =
    (currentPage - 1) * (isMobile ? cardsPerPageMobile : cardsPerPageWeb);
  const currentProperties = properties.slice(
    startIndex,
    startIndex + (isMobile ? cardsPerPageMobile : cardsPerPageWeb)
  );

  // Pagination for Titip Jual Dan Sewa
  const [currentPageTitip, setCurrentPageTitip] = useState(1);
  const cardsPerPageMobileTitip = 1;
  const cardsPerPageWebTitip = 4;

  const totalPagesTitip = Math.ceil(
    titipJualSewaProperties.length /
      (isMobile ? cardsPerPageMobileTitip : cardsPerPageWebTitip)
  );
  const startIndexTitip =
    (currentPageTitip - 1) *
    (isMobile ? cardsPerPageMobileTitip : cardsPerPageWebTitip);
  const currentTitipProperties = titipJualSewaProperties.slice(
    startIndexTitip,
    startIndexTitip +
      (isMobile ? cardsPerPageMobileTitip : cardsPerPageWebTitip)
  );

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Handle pagination navigation for Property Week Recommend
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle dot click for Property Week Recommend
  const handleDotClick = (page: number) => {
    setCurrentPage(page);
  };

  // Handle pagination navigation for Titip Jual Dan Sewa
  const handleNextTitip = () => {
    if (currentPageTitip < totalPagesTitip) {
      setCurrentPageTitip(currentPageTitip + 1);
    }
  };

  const handlePrevTitip = () => {
    if (currentPageTitip > 1) {
      setCurrentPageTitip(currentPageTitip - 1);
    }
  };

  // Handle dot click for Titip Jual Dan Sewa
  const handleDotClickTitip = (page: number) => {
    setCurrentPageTitip(page);
  };

  // Automatic page transition every 5 seconds for Property Week Recommend
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        if (prevPage < totalPages) return prevPage + 1;
        return 1; // Go back to the first page after reaching the last one
      });
    }, 5000); // 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [totalPages]);

  // Automatic page transition every 5 seconds for Titip Jual Dan Sewa
  useEffect(() => {
    const intervalTitip = setInterval(() => {
      setCurrentPageTitip((prevPage) => {
        if (prevPage < totalPagesTitip) return prevPage + 1;
        return 1; // Go back to the first page after reaching the last one
      });
    }, 5000); // 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalTitip);
  }, [totalPagesTitip]);

  return (
    <div>
      <section className="container mx-auto mt-35">
        {/* How to search your dream property */}
        <div className="px-6">
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
        </div>
        {/* Property select */}
        <div className="container mx-auto mt-15">
          <div className="md:grid md:grid-cols-2 md:px-10">
            <div>
              <h1 className="text-3xl font-semibold md:text-4xl text-center md:text-start">
                Pilihan Kategori
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 mt-10 px-5 gap-5">
            {(isMobile ? currentCategoriesMobile : currentCategoriesWeb).map(
              (category) => (
                <div
                  key={category.name}
                  onClick={() => alert(`${category.name} clicked`)}
                  className="bg-white shadow-2xl flex flex-col justify-center items-center text-center rounded-xl px-5 p-20"
                >
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    width={70}
                    height={70}
                    className="p-3"
                  />
                  <h2 className="text-sm md:text-md font-semibold text-black">
                    {category.name}
                  </h2>
                  <p className="text-sm md:text-md text-black">
                    {category.count} Properti
                  </p>
                </div>
              )
            )}
          </div>

          {/* Pagination for Mobile */}
          {isMobile && (
            <div className="flex justify-center items-center mt-6">
              <ChevronLeftIcon
                className="cursor-pointer"
                onClick={handlePrevMobile}
                size={24}
              />
              {[...Array(totalPagesCategoriesMobile)].map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => setCurrentPageMobile(index + 1)}
                  className={`cursor-pointer ${
                    currentPageMobile === index + 1
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  } w-2.5 h-2.5 rounded-full gap-2 mx-1`}
                />
              ))}
              <ChevronRight
                className="cursor-pointer"
                onClick={handleNextMobile}
                size={24}
              />
            </div>
          )}

          {/* Pagination for Web */}
          {!isMobile && (
            <div className="flex justify-center items-center mt-6">
              <ChevronLeftIcon
                className="cursor-pointer"
                onClick={handlePrevWeb}
                size={24}
              />
              {[...Array(totalPagesCategoriesWeb)].map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => setCurrentPageWeb(index + 1)}
                  className={`cursor-pointer ${
                    currentPageWeb === index + 1
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  } w-2.5 h-2.5 rounded-full gap-2 mx-1`}
                />
              ))}
              <ChevronRight
                className="cursor-pointer"
                onClick={handleNextWeb}
                size={24}
              />
            </div>
          )}
        </div>
        {/* Property Week Recomend*/}
        <div className="mt-15 px-20 p-3">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold md:text-4xl text-center md:text-start">
              Rekomendasi Investasi Properti Minggu Ini
            </h1>
            <p className="text-md text-center md:text-start md:text-xl mt-2">
              Potensi Cuan Maksimal
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 transition-all duration-300 ease-in-out mt-10">
            {currentProperties.map((property) => (
              <div
                key={property.id}
                onClick={() => alert("Card clicked")}
                className="shadow-2xl flex flex-col justify-start items-start text-start rounded-xl relative"
              >
                <Image
                  src={property.imageUrl}
                  alt="Property 1"
                  width={400}
                  height={300}
                  className="rounded-xl"
                />

                <span className="absolute top-3 left-3 px-3 py-1 text-sm font-semibold text-white bg-[#1F4B43] rounded-full z-10">
                  {property.type}
                </span>

                <h2 className="text-sm md:text-xl font-semibold px-1 dark:px-0">
                  {property.title}
                </h2>
                <div className="flex gap-2 mt-1 px-1 dark:px-0">
                  <MapPin size={20} />
                  <p className="text-sm md:text-md">{property.location}</p>
                </div>

                {/* Garis horizontal */}
                <div className="border-t-1 border-gray-500 my-3 w-full"></div>

                {/* Item berjajar dengan garis vertikal sebagai pemisah */}
                <div className="flex w-full justify-between">
                  <div className="flex justify-center gap-3 items-center w-1/3">
                    <Scaling size={22} />
                    <p className="font-semibold">{property.area}</p>
                  </div>
                  <div className="border-l-1 border-gray-500 h-10"></div>
                  <div className="flex justify-center gap-3 items-center w-1/3">
                    <Home size={22} />
                    <p className="font-semibold">{property.buildingarea}</p>
                  </div>
                  <div className="border-l-1 border-gray-500 h-10"></div>
                  <div className="flex items-center gap-3 justify-center w-1/3">
                    <Bed size={22} />
                    <p className="font-semibold">{property.beds}</p>
                  </div>
                  <div className="border-l-1 border-gray-500 h-10"></div>
                  <div className="flex justify-center gap-3 items-center w-1/3">
                    <Bath size={22} />
                    <p className="font-semibold">{property.baths}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination with Chevron Icons and Dot Buttons */}
          <div className="flex justify-center items-center mt-6">
            <ChevronLeftIcon
              className="cursor-pointer"
              onClick={handlePrev}
              size={24}
            />
            {[...Array(totalPages)].map((_, index) => (
              <DotButton
                key={index}
                onClick={() => handleDotClick(index + 1)}
                className={`cursor-pointer ${
                  currentPage === index + 1 ? "bg-yellow-500" : "bg-gray-300"
                } w-2.5 h-2.5 rounded-full gap-2 mx-1`}
              />
            ))}

            <ChevronRight
              className="cursor-pointer"
              onClick={handleNext}
              size={24}
            />
          </div>
        </div>
        {/* Property by City */}
        <div className="container mx-auto px-6 mt-15">
          <h2 className="text-4xl font-bold text-center md:text-start  mb-3">
            Temukan Properti Di Kotamu
          </h2>
          <p className="text-lg text-center md:text-start mb-12">
            Kami hadir di kota-kota besar di Indonesia
          </p>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side: Jakarta card */}
            <div className="relative lg:w-1/3 h-[40vh] lg:h-[130vh] group">
              <Image
                src={cities[0].imageUrl}
                alt={cities[0].name}
                width={600}
                height={800} // height lebih tinggi agar sesuai dengan tampilan
                className="object-cover w-full h-full rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t  group-hover:opacity-40"></div>
              <div className="absolute bottom-4 left-0 right-0 p-3 text-start text-white z-10 backdrop-blur-md bg-white/30 rounded-lg mx-4">
                <h3 className="text-xl font-semibold">{cities[0].name}</h3>
                <p>{cities[0].properties} Properties</p>
              </div>
            </div>

            {/* Right side: Other city cards */}
            <div className="grid grid-cols-2 gap-6 lg:w-2/3">
              {cities.slice(1).map((city, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden"
                >
                  <Image
                    src={city.imageUrl}
                    alt={city.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t group-hover:opacity-40"></div>
                  <div className="absolute bottom-0.5 md:bottom-4 left-0 right-0 p-0.5 md:p-3 text-center md:text-start text-white z-10 backdrop-blur-md bg-white/30 rounded-lg mx-4">
                    <h3 className="text-md md:text-2xl font-semibold">
                      {city.name}
                    </h3>
                    <p className="text-xs md:text-lg">
                      {city.properties} Properties
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*Listing titip Jual Dan Sewa*/}
        <div className="mt-15 px-20 p-3">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold md:text-4xl text-center md:text-start">
              Listing Titip Jual Dan Sewa
            </h1>
            <p className="text-md text-center md:text-start md:text-xl mt-2">
              Layanan Khusus Member Prop2Go API
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end ">
            <Button
              onClick={() => alert("Button clicked")}
              className="w-36 h-12 bg-yellow-400 text-black hover:bg-yellow-500 rounded-full flex items-center justify-center"
            >
              <span>Lihat Semua</span>
              <ChevronRight
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
              </ChevronRight>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 transition-all duration-300 ease-in-out mt-10">
            {currentTitipProperties.map((property) => (
              <div
                key={property.id}
                onClick={() => alert("Card clicked")}
                className="shadow-2xl flex flex-col justify-start items-start text-start rounded-xl relative"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-sm font-semibold text-white bg-[#1F4B43] rounded-full z-10">
                  {property.type}
                </span>
                <h2 className="text-sm md:text-md font-semibold px-1 dark:px-0 md:mt-2">
                  {property.title}
                </h2>
                <div className="flex gap-2 mt-1 px-1 dark:px-0">
                  <MapPin size={15} />
                  <p className="text-sm">{property.location}</p>
                </div>
                <div className="border-t-1 border-gray-500 my-3 w-full"></div>
                <div className="flex items-center">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-1">
                      <Scaling size={12} />
                      <span className="text-xs font-medium">
                        {property.area}
                      </span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-1">
                      <Home size={12} />
                      <span className="text-xs font-medium">
                        {property.buildingarea}
                      </span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-1">
                      <Bed size={12} />
                      <span className="text-xs font-medium">
                        {property.beds}
                      </span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-1">
                      <Bath size={12} />
                      <span className="text-xs font-medium">
                        {property.baths}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-bold">{property.price}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination with Chevron Icons and Dot Buttons for Titip Jual Dan Sewa */}
          <div className="flex justify-center items-center mt-6">
            <ChevronLeftIcon
              className="cursor-pointer"
              onClick={handlePrevTitip}
              size={24}
            />
            {[...Array(totalPagesTitip)].map((_, index) => (
              <DotButton
                key={index}
                onClick={() => handleDotClickTitip(index + 1)}
                className={`cursor-pointer ${
                  currentPageTitip === index + 1
                    ? "bg-yellow-500"
                    : "bg-gray-300"
                } w-2.5 h-2.5 rounded-full gap-2 mx-1`}
              />
            ))}

            <ChevronRight
              className="cursor-pointer"
              onClick={handleNextTitip}
              size={24}
            />
          </div>
        </div>
        {/* Top Marketing */}
        <div className="mt-15 px-20 p-3">
          <div className="px-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">
              Top Marketing Kami Bulan Ini
            </h1>
            <p className="text-md md:text-md text-center mt-3">
              Hubungi Kami Untuk Mendapatkan Bantuan Profesional Terbaik.
            </p>
            <div className="mt-10 grid grid-cols-5 gap-5">
              {topMarketing.map((marketing) => (
                <>
                  <div className="flex flex-col">
                    <div
                      key={marketing._id}
                      className="group rounded-lg overflow-hidden"
                    >
                      <Image
                        src={marketing.profile}
                        alt={`${marketing.firstName} ${marketing.lastName}`}
                        width="400"
                        height="600"
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                      />
                    </div>
                    <div className="  text-center">
                      <h2 className="font-semibold">{`${marketing.firstName} ${marketing.lastName}`}</h2>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
