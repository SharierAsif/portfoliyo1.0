import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import itemDB from "./data/ItemDB";
import SingleItem from "./SingleItem";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";

export const Testomonal = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-3xl font-medium title-font text-blue-700 mb-12 text-left">
          Testimonials
        </h1>
        {/* <div className="grid grid-cols-3 space-x-4">
          
        </div> */}
        <div className="">
        <section class="bg-gray-100">
        <div class="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                Don't just take our word for it...
                <br class="hidden sm:block lg:hidden" />
                Read reviews from our customers
              </h2>

              <p class="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas veritatis illo placeat harum porro optio fugit a culpa
                sunt id!
              </p>

              <div class=" lg:mt-8 lg:flex lg:gap-4">
                <div class="btn-prev rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <span class="sr-only">Previous Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 rtl:rotate-180"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>

                <div class="btn-next rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <span class="sr-only">Next Slide</span>
                  <svg
                    class="h-5 w-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="-mx-6 lg:col-span-2 lg:mx-0">
              <div class="swiper-container !overflow-hidden">
                <Swiper
                  modules={[Pagination, Navigation, Keyboard, Autoplay]}
                  navigation={{
                    clickable: true,
                    nextEl: ".btn-next",
                    prevEl: ".btn-prev",
                  }}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  keyboard={{
                    enabled: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                  }}
                  slidesPerView={1}
                  spaceBetween={10}
                  class="swiper-wrapper"
                >
                  {itemDB.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <SingleItem
                          name={item.name}
                          title={item.title}
                          dec={item.dec}
                        ></SingleItem>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              class="prev-button rounded-full border border-blue-600 p-4 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <svg
                class="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              class="next-button rounded-full border border-blue-600 p-4 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
        </div>
      </div>
    </section>
  );
};
