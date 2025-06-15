// import React, { useEffect, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   useAnimation,
//   PanInfo,
// } from "framer-motion";
// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";

// import crypto from "@/public/images/crypto.jpg";
// import ecommerce from "@/public/images/ecommerce.jpg";
// import exercise from "@/public/images/exercise.png";
// import netflix from "@/public/images/netflix.png";
// import weather from "@/public/images/weather.png";

// // ✅ Fixed image array with correct types
// const defaultImages: { name: string; img: StaticImageData; url: string }[] = [
//   {
//     name: "Ecommerce-clone",
//     img: ecommerce,
//     url: "https://ecommerce-5r0mcb5s2-niladripradhans-projects.vercel.app/",
//   },
//   {
//     name: "Exercises-Tracker",
//     img: exercise,
//     url: "https://exercise-app-git-main-niladripradhans-projects.vercel.app/",
//   },
//   {
//     name: "Weather-app",
//     img: weather,
//     url: "https://weather-app-nu-lime.vercel.app/",
//   },
//   {
//     name: "Netflix-clone",
//     img: netflix,
//     url: "https://netflix-clone-ten-gamma-45.vercel.app/",
//   },
//   {
//     name: "Exercises-Tracker",
//     img: exercise,
//     url: "https://exercise-app-git-main-niladripradhans-projects.vercel.app/",
//   },
//   {
//     name: "Weather-app",
//     img: weather,
//     url: "https://weather-app-nu-lime.vercel.app/",
//   },
//   {
//     name: "Ecommerce-clone",
//     img: ecommerce,
//     url: "https://ecommerce-5r0mcb5s2-niladripradhans-projects.vercel.app/",
//   },
//   {
//     name: "Exercises-Tracker",
//     img: exercise,
//     url: "https://exercise-app-git-main-niladripradhans-projects.vercel.app/",
//   },
//   {
//     name: "Weather-app",
//     img: weather,
//     url: "https://weather-app-nu-lime.vercel.app/",
//   },
// ];

// // ✅ Correct prop type
// interface RollingGalleryProps {
//   autoplay?: boolean;
//   pauseOnHover?: boolean;
//   images?: { img: StaticImageData; url: string }[];
// }

// const RollingGallery: React.FC<RollingGalleryProps> = ({
//   autoplay = false,
//   pauseOnHover = false,
//   images = [],
// }) => {
//   const galleryImages = images.length > 0 ? images : defaultImages;

//   const [isScreenSm, setIsScreenSm] = useState(false);

// useEffect(() => {
//   const checkSize = () => setIsScreenSm(window.innerWidth <= 640);
//   checkSize();
//   window.addEventListener("resize", checkSize);
//   return () => window.removeEventListener("resize", checkSize);
// }, []);

// // const cylinderWidth = isScreenSm ? 1100 : 1800;
// const cylinderWidth = isScreenSm
//   ? galleryImages.length * 180
//   : galleryImages.length * 250;

// const faceCount = galleryImages.length;
// const faceWidth = (cylinderWidth / faceCount) * 1.5;
// const radius = cylinderWidth / (2 * Math.PI);

//   const dragFactor = 0.05;
//   const rotation = useMotionValue(0);
//   const controls = useAnimation();
//   const transform = useTransform(rotation, (val) => `rotateY(${val}deg)`);

//   const startInfiniteSpin = (startAngle: number) => {
//     controls.start({
//       rotateY: [startAngle, startAngle - 360],
//       transition: {
//         duration: 20,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     });
//   };

//   useEffect(() => {
//     if (autoplay) {
//       const currentAngle = rotation.get();
//       startInfiniteSpin(currentAngle);
//     } else {
//       controls.stop();
//     }
//   }, [autoplay]);

//   const handleUpdate = (latest: any) => {
//     if (typeof latest.rotateY === "number") {
//       rotation.set(latest.rotateY);
//     }
//   };

//   const handleDrag = (_: any, info: PanInfo) => {
//     controls.stop();
//     rotation.set(rotation.get() + info.offset.x * dragFactor);
//   };

//   const handleDragEnd = (_: any, info: PanInfo) => {
//     const finalAngle = rotation.get() + info.velocity.x * dragFactor;
//     rotation.set(finalAngle);
//     if (autoplay) {
//       startInfiniteSpin(finalAngle);
//     }
//   };

//   const handleMouseEnter = () => {
//     if (autoplay && pauseOnHover) controls.stop();
//   };

//   const handleMouseLeave = () => {
//     if (autoplay && pauseOnHover) startInfiniteSpin(rotation.get());
//   };

//   const gapDeg = 5;

//   return (
//     <div className="relative h-[500px] w-full overflow-hidden">
//       {/* Carousel Cylinder */}
//       <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
//         <motion.div
//           drag="x"
//           dragElastic={0}
//           onDrag={handleDrag}
//           onDragEnd={handleDragEnd}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           animate={controls}
//           onUpdate={handleUpdate}
//           style={{
//             transform,
//             width: cylinderWidth,
//             transformStyle: "preserve-3d",
//           }}
//           className="flex min-h-[200px] cursor-grab items-center justify-center"
//         >
//           {/* {galleryImages.map((item, i) => (
//             <>
//               <Link
//                 href={item.url}
//                 key={i}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group absolute p-[6%] md:p-[4%] [backface-visibility:hidden]"
//                 style={{
//                   width: `${faceWidth}px`,
//                   transform: `rotateY(${
//                     (360 / faceCount + gapDeg) * i
//                   }deg) translateZ(${radius}px)`,
//                 }}
//               >
//                 <Image
//                   src={item.img}
//                   alt={`gallery-${i}`}
//                   className="pointer-events-none !h-[200px] !w-[350px] rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[200px] !sm:w-[320px]"
//                 />
//               <h2>{item?.name}</h2>
//               </Link>
//             </>
//           ))} */}

//           {galleryImages.map((item, i) => (
//             <Link
//               href={item.url}
//               key={i}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group absolute p-[6%] md:p-[4%] [backface-visibility:hidden]"
//               style={{
//                 width: `${faceWidth}px`,
//                 transform: `rotateY(${
//                   (360 / faceCount) * i
//                 }deg) translateZ(${radius}px)`,
//               }}
//             >
//               <Image
//                 src={item.img}
//                 alt={`gallery-${i}`}
//                 className="pointer-events-none !h-[200px] !w-[350px] rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[200px] !sm:w-[320px]"
//               />
//               <h2 className="text-center text-white mt-2">{item?.name}</h2>
//             </Link>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default RollingGallery;

// ------------------------------------------------------------

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import ecommerce from "@/public/images/ecommerce2.jpg";
import exercise from "@/public/images/exercise.png";
import netflix from "@/public/images/netflix-banner.png";
import weather from "@/public/images/weather.png";
import disney from "@/public/images/disney.png";

const defaultImages: {
  name: string;
  img: StaticImageData;
  url: string;
  desc: { title: string; details: string }[];
}[] = [
  {
    name: "Ecommerce-clone",
    img: ecommerce,
    // url: "https://ecommerce-5r0mcb5s2-niladripradhans-projects.vercel.app/",
    url:"https://ecommerce-clone-8l9l.vercel.app/",
    desc: [
      { title: "Frontend", details: "React.js, TypeScript, Tailwind CSS" },
      { title: "State Management", details: "Redux Toolkit" },
      { title: "Backend/API", details: "Fake Store API integration" },
      {
        title: "Features",
        details:
          "Product listing, Product details, Cart management, Responsive Design",
      },
    ],
  },
  {
    name: "Exercises-Tracker",
    img: exercise,
    url: "https://exercise-app-git-main-niladripradhans-projects.vercel.app/",
    desc: [
      { title: "Frontend", details: "React.js, Tailwind CSS" },
      { title: "API", details: "ExerciseDB API integration" },
      {
        title: "Features",
        details:
          "Exercise search, Body part filtering, Exercise details, Responsive UI",
      },
    ],
  },
  {
    name: "Weather-app",
    img: weather,
    url: "https://weather-app-nu-lime.vercel.app/",
    desc: [
      { title: "Frontend", details: "React.js, Tailwind CSS" },
      { title: "API", details: "OpenWeatherMap API" },
      {
        title: "Features",
        details:
          "Current weather, City search, Dynamic background based on weather",
      },
    ],
  },
  {
    name: "Netflix-clone",
    img: netflix,
    url: "https://netflix-clone-git-main-niladripradhans-projects.vercel.app/",
    desc: [
      { title: "Frontend", details: "React.js, Tailwind CSS" },
      { title: "API", details: "TMDB (The Movie Database) API" },
      {
        title: "Features",
        details:
          "Movie listing, Banner, Trailers via YouTube, Hover effects, Responsive Design",
      },
    ],
  },
  {
    name: "Disney-clone",
    img: disney,
    url: "https://disney-azure.vercel.app/",
    desc: [
      { title: "Frontend", details: "React.js, Tailwind CSS" },
      { title: "Authentication", details: "Clerk (User Authentication)" },
      { title: "API", details: "TMDB (The Movie Database) API" },
      {
        title: "Features",
        details:
          "Movie listing, Banner, Trailers via YouTube, Hover effects, Responsive Design",
      },
    ],
  },
];


const RollingGallery: React.FC<RollingGalleryProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <motion.div
        className="flex gap-6 overflow-x-auto px-2 py-4 custom-scrollbar"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
      >
        {defaultImages.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => handleCardClick(i)}
            className="min-w-[300px] cursor-pointer rounded-lg border-2 border-gray-700 bg-gray-800 p-3 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={item.img}
              alt={item.name}
              className="rounded-md object-cover w-full h-[200px]"
            />
            <h2 className="text-center text-white mt-2 font-semibold text-lg">
              {item.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>

      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 bg-gray-900 text-white p-4 rounded-lg max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">
            {defaultImages[selectedIndex].name}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {defaultImages[selectedIndex].desc.map((descItem, idx) => (
              <li key={idx}>
                <span className="font-semibold">{descItem.title}: </span>
                {descItem.details}
              </li>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <a
              href={defaultImages[selectedIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Visit Project
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RollingGallery;
