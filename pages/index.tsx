import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import consulting from "../public/consulting.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Necati Soyata Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="dark:text-white text-xl font-burtons">
              developedbyNS
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none ml-8 "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl  mx-auto">
              Necati Soyata
            </h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-lg md:text-xl">
              Freelancer prodiving servicing for mobile and web
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-5 text-gray-500">
            <AiFillTwitterCircle />
            <AiFillYoutube />
            <AiFillLinkedin />
          </div>
          <div className=" overflow-hidden relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <Image src={deved} layout="fill" objectFit="cover" alt={"NS"} />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journy , I DEVELOP
              <span className="text-teal-600"> mobile forever</span> and ever
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} alt={"design"} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating elegant design solutions</p>
              <h4>Design tools I Use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} alt={"design"} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating elegant design solutions</p>
              <h4>Design tools I Use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} alt={"design"} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating elegant design solutions</p>
              <h4>Design tools I Use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>

            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journy , I DEVELOP
              <span className="text-teal-600"> mobile forever</span> and ever
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web1}
                width={"100%"}
                height={"100%"}
                alt={"web1"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt={"web1"} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt={"web1"} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt={"web1"} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt={"web1"} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} alt={"web1"} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
