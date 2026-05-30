"use client";

import Image from "next/image";
import Slide from "./animations/Slide";
import Opacity from "./animations/Opacity";
import { useState } from "react";
import OptionalPrices from "./OptionalPrices";
import { AnimatePresence, motion } from "framer-motion";

const MainPrices = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <main id="services" className="bg-white flex flex-col gap-20 px-5">
      <section className="flex items-center justify-center gap-28">
        <div className="lg:block hidden">
          <Opacity>
            <Image
              src="/hand1.png"
              alt="Hand icon for prices"
              width={350}
              height={494}
              className="translate-y-[25.5px]"
            />
          </Opacity>
        </div>

        <Slide>
          <section className="flex flex-col gap-7">
            <h2 className="text-[#6B0606] text-center font-bold font-abhaya text-5xl">
              Tretmani i cijenik
            </h2>
            <p className="font-inter text-[#808080] text-center">
              Velit in dui dictum arcu felis tempor in feugiat in mauris
            </p>

            <article className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Njega noktiju
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$25</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Šišanje
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$35</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Make up
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$50</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Kozmetika
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$30</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Spa tretmani
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$40</p>
                  </span>
                </div>
              </div>

              <span
                onClick={handleClick}
                className="text-[#6B0606] underline font-medium cursor-pointer"
              >
                {open ? "Sakrij" : "Ostalo"}
              </span>
            </article>
          </section>
        </Slide>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <OptionalPrices />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MainPrices;
