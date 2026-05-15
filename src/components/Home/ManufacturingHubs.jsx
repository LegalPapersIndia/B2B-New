// import React, { useRef, useEffect, useState } from "react";
// import { MapPin, Factory } from "lucide-react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // IMAGES (replace with your own)
// import mumbai from "../assets/hero1.jpg";
// import delhi from "../assets/hero1.jpg";
// import surat from "../assets/hero1.jpg";
// import ahmedabad from "../assets/hero1.jpg";
// import pune from "../assets/hero1.jpg";

// const hubs = [
//   {
//     name: "Mumbai",
//     image: mumbai,
//     industries: "Chemicals, Pharma, Export",
//     suppliers: "1200+ Suppliers",
//   },
//   {
//     name: "Delhi",
//     image: delhi,
//     industries: "Electronics, Machinery",
//     suppliers: "950+ Suppliers",
//   },
//   {
//     name: "Surat",
//     image: surat,
//     industries: "Textiles, Diamonds",
//     suppliers: "800+ Suppliers",
//   },
//   {
//     name: "Ahmedabad",
//     image: ahmedabad,
//     industries: "Chemicals, Manufacturing",
//     suppliers: "700+ Suppliers",
//   },
//   {
//     name: "Pune",
//     image: pune,
//     industries: "Automobile, Engineering",
//     suppliers: "650+ Suppliers",
//   },
// ];

// export default function ManufacturingHubs() {
//   const scrollRef = useRef(null);
//   const intervalRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   // AUTO SCROLL
//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//     intervalRef.current = setInterval(() => {
//       if (!el || isHovered) return;

//       el.scrollLeft += 1;

//       if (el.scrollLeft >= el.scrollWidth / 2) {
//         el.scrollLeft = 0;
//       }
//     }, 16);

//     return () => clearInterval(intervalRef.current);
//   }, [isHovered]);

//   // BUTTON SCROLL
//   const scroll = (dir) => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const amount = 320;

//     el.scrollBy({
//       left: dir === "next" ? amount : -amount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-gray-50">
//       <div className="max-w-[1400px] mx-auto px-4 py-12 space-y-12">

//         {/* HEADER */}
//         <div>
//           <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">
//             <Factory className="w-4 h-4" />
//             Industrial Cities
//           </div>

//           <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
//             Top{" "}
//             <span className="text-blue-800">Manufacturing Hubs</span>
//           </h2>

//           <p className="mt-2 text-slate-600 max-w-2xl">
//             Explore leading industrial cities and connect with verified suppliers
//             across major manufacturing regions.
//           </p>
//         </div>

//         {/* CAROUSEL */}
//         <div
//           className="relative group"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >

//           {/* LEFT BUTTON */}
//           <button
//             onClick={() => scroll("prev")}
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-20
//                        bg-white/90 hover:bg-white shadow-md p-3 rounded-full
//                        opacity-0 group-hover:opacity-100 transition"
//           >
//             <FaChevronLeft />
//           </button>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={() => scroll("next")}
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-20
//                        bg-white/90 hover:bg-white shadow-md p-3 rounded-full
//                        opacity-0 group-hover:opacity-100 transition"
//           >
//             <FaChevronRight />
//           </button>

//           {/* SCROLL AREA */}
//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
//           >
//             {[...hubs, ...hubs].map((hub, index) => (
//               <div
//                 key={index}
//                 className="relative flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg group"
//               >
                
//                 {/* IMAGE */}
//                 <img
//                   src={hub.image}
//                   alt={hub.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                 />

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//                 {/* CONTENT */}
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <div className="flex items-center gap-2 text-xs text-orange-400 mb-1">
//                     <MapPin className="w-3 h-3" />
//                     {hub.name}
//                   </div>

//                   <h3 className="text-lg font-bold">{hub.industries}</h3>

//                   <p className="text-sm text-gray-200">
//                     {hub.suppliers}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* HIDE SCROLLBAR */}
//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//         `}
//       </style>
//     </section>
//   );
// }




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  MapPin,
  Star,
  ArrowRight,
  Factory,
} from "lucide-react";

// SWIPER CSS
import "swiper/css";
import "swiper/css/pagination";

// IMAGES
import delhi from "../../assets/delhi.jpg";
import mumbai from "../../assets/mumbai.jpg";
import surat from "../../assets/Surat.jpg";
import ahmedabad from "../../assets/ahmedabad.jpg";
import bengaluru from "../../assets/Bengaluru.jpg";

const hubs = [
  {
    city: "Delhi NCR",
    image: delhi,
    suppliers: "2.4K+",
    rating: 4.8,
    industries: ["Electronics", "Auto", "Apparel"],
  },
  {
    city: "Mumbai",
    image: mumbai,
    suppliers: "3.8K+",
    rating: 4.9,
    industries: ["Pharma", "Textiles", "Packaging"],
  },
  {
    city: "Ahmedabad",
    image: ahmedabad,
    suppliers: "5.1K+",
    rating: 4.7,
    industries: ["Textiles", "Chemicals", "Machinery"],
  },
  {
    city: "Bengaluru",
    image: bengaluru,
    suppliers: "2.9K+",
    rating: 4.8,
    industries: ["Electronics", "Aerospace", "IT"],
  },
  {
    city: "Surat",
    image: surat,
    suppliers: "6.7K+",
    rating: 4.9,
    industries: ["Textiles", "Diamonds", "Apparel"],
  },
];

export default function ManufacturingHubs() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">
            <Factory className="w-4 h-4" />
            Industrial Cities
          </div>

          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Manufacturing{" "}
            <span className="text-blue-800">Hubs</span>
          </h2>

          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore top industrial cities with verified suppliers across India.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
         breakpoints={{
  0: {
    slidesPerView: 1.1,
  },
  640: {
    slidesPerView: 1.5,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 4,
  },
}}
          className="pb-14"
        >
          {hubs.map((hub, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 group">

                {/* IMAGE */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={hub.image}
                    alt={hub.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* RATING */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    {hub.rating}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* CITY */}
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-orange-600" />

                    <h3 className="font-bold text-xl text-gray-900">
                      {hub.city}
                    </h3>
                  </div>

                  {/* SUPPLIERS */}
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-semibold text-gray-800">
                      {hub.suppliers}
                    </span>{" "}
                    Suppliers Available
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hub.industries.map((industry, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button
                    className="w-full bg-orange-600 hover:bg-blue-800
                               text-white py-3.5 rounded-2xl text-sm font-semibold
                               flex items-center justify-center gap-2
                               transition-all duration-300"
                  >
                    Explore Hub
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}