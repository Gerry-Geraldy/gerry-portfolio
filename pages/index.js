import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import LogoProgramming from "../components/LogoProgramming";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10 flex flex-col laptop:flex-row items-center gap-10">
          {/* Bagian Teks (Kiri) */}
          <div className="laptop:w-1/2 w-full">
            <h1
              ref={textOne}
              className="text-2xl tablet:text-3xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-2xl tablet:text-3xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-2xl tablet:text-3xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-2xl tablet:text-3xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          {/* Bagian Gambar Portofolio (Kanan) */}
          <div className="laptop:w-1/2 w-full flex justify-center relative">
            <img
              src="/images/Foto Porfolio.png"
              alt="Portfolio"
              className="w-[450px] h-auto object-cover grayscale mix-blend-darken drop-shadow-lg"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        </div>
        <div
          className="mt-10 laptop:mt-32 p-4 flex flex-col laptop:flex-row items-center gap-6"
          ref={aboutRef}
        >
          {/* Bagian Teks */}
          <div className="flex justify-center relative">
            <img
              src="/images/about image.png"
              alt="Technology Icon"
              className="w-[550px] h-auto object-contain"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
              }}
            />
          </div>
          <div className="laptop:w-1/2 text-center laptop:text-left">
            <h1 className="text-2xl font-semibold">About</h1>
            <p className="mt-3 text-md">{data.aboutpara}</p>
          </div>

          {/* Bagian Gambar dengan efek gradient transparan */}
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
          <LogoProgramming />
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
