"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div>
      <section className="w-full h-96 flex flex-row items-end justify-end sm:justify-start p-4 sm:py-12 sm:px-32 relative">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="bg-white p-6 text-black w-full sm:h-full h-auto sm:w-[30%]">
          <h1 className="text-3xl sm:text-4xl  font-extrabold">Portfolios</h1>
          <p className="my-4 text-sm font-medium">
            Our team are best in class and responsible for maximizing account
            goals and efficiently executing vital daily account tasks.
          </p>
          <Link
            href="/services"
            className="my-4 px-6 py-2 sm:py-4 font-semibold flex flex-row space-x-2 border-b-2 border-cyan-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
          >
            View our Services
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="text-3xl text-center py-4 font-semibold">
          Our Portfolio
        </div>
        <div class="grid lg:grid-cols-2 gap-6">
          <a
            class="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div class="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img
                class="w-full h-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col h-full p-4 sm:p-6">
                <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                  Facebook is creating a news section in Watch to feature
                  breaking news
                </h3>
                <p class="mt-2 text-white/[.8]">
                  Facebook launched the Watch platform in August
                </p>
              </div>
            </div>
          </a>

          <a
            class="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img
                class="w-full h-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col h-full p-4 sm:p-6">
                <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                  What CFR (Conversations, Feedback, Recognition) really is
                  about
                </h3>
                <p class="mt-2 text-white/[.8]">
                  For a lot of people these days, Measure What Matters.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
