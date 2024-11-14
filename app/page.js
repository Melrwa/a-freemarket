"use client";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faDumbbell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import BusinessCard from "./components/BusinessCard";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Fetch businesses data from your API endpoint
    fetch("http://localhost:3001/businesses")
      .then((res) => res.json())
      .then((data) => {
        // Sort businesses by rating in descending order and get top 6
        const topBusinesses = data
          .sort((a, b) => b.averageRating - a.averageRating)
          .slice(0, 6);
        setBusinesses(topBusinesses);
      });
  }, []);

  return (
    <>
      <NavBar />

      <div>
        <Image
          src={"/assets/cafe-3.jpg"}
          height={383}
          width={1440}
          alt="Cafe"
          quality={100}
          layout="responsive"
          className="bg-no-repeat w-full h-auto bg-cover bg-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className={`${roboto.className} antialiased lg:text-[64px] sm:text-[48px] text-wrap text-white`}>
            Find a business, make <i>yours</i> known.
          </h2>
        </div>
      </div>

      
      <div className="h-auto bg-[#C6D3BC] px-12 py-32">
        <h1 className={`${roboto.className} antialiased text-[32px] mb-6`}>Go Digital</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-between gap-4 bg-[#ECF0E9] p-4 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Find businesses faster</h3>
              <p>Use our site to find businesses closest to you.</p>
            </div>
            <FontAwesomeIcon icon={faMapPin} className="text-[124px]" />
          </div>
          <div className="flex justify-between gap-4 bg-[#ECF0E9] p-4 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Add your own</h3>
              <p>Have your own hustle? Make it known!</p>
            </div>
            <FontAwesomeIcon icon={faDumbbell} className="text-[124px]" />
          </div>
          <div className="flex justify-between gap-4 bg-[#ECF0E9] p-4 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Sort, categorize and rate</h3>
              <p>Utilize our functionality to fine-tune your selection.</p>
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[124px]" />
          </div>
        </div>
      </div>

      <div className="h-auto bg-[#C6D3BC] p-12">
        <h1 className="font-serif text-[24px] mb-4">
          Top trending businesses:{" "}
          <Link href="/businesses" className="hover:bg-[#336633] hover:rounded-[12px] hover:text-white p-2 transition-all text-[20px]">
            See more
          </Link>
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       { businesses.map((business) => ( <BusinessCard key={business.id} business={business}/>))}

        </div>
       
      </div>

      <Footer />
    </>
  );
}