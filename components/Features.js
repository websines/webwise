"use client";
import React from "react";

const Features = () => {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="lg:w-3/4">
            <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Collaborative tools to design better user experience
            </h2>
            <p class="mt-3 text-gray-800 dark:text-gray-400">
              We help businesses bring ideas to life in the digital world, by
              designing and implementing the technology tools that they need to
              win.
            </p>
            <p class="mt-5">
              <a
                class="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500"
                href="#"
              >
                Contact sales to learn more
                <svg
                  class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </p>
          </div>

          <div class="space-y-6 lg:space-y-10">
            <div class="flex">
              <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <svg
                  class="flex-shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Industry-leading documentation
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration in a
                  fraction of the time.
                </p>
              </div>
            </div>

            <div class="flex">
              <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <svg
                  class="flex-shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Developer community support
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  We actively contribute to open-source projects—giving back to
                  the community through development, patches, and sponsorships.
                </p>
              </div>
            </div>

            <div class="flex">
              <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <svg
                  class="flex-shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Simple and affordable
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  From boarding passes to movie tickets, there's pretty much
                  nothing you can't store with Preline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
