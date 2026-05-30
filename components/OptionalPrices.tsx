"use client";

import Image from "next/image";
import Slide from "./animations/Slide";
import Opacity from "./animations/Opacity";
import { useState } from "react";

const OptionalPrices = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <main className="flex flex-col gap-20 px-5">
      <main
        id="services"
        className="bg-white flex items-center justify-center gap-28"
      >
        <Slide>
          <section className="flex flex-col gap-7">
            <h2 className="text-[#6B0606] text-center font-bold font-abhaya text-5xl">
              Šišanje
            </h2>
            <p className="font-inter text-[#808080] text-center">
              Velit in dui dictum arcu felis tempor in feugiat in mauris
            </p>

            <article className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Jednostavna frizura
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    od <p className="text-[#6B0606]">$25</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Hair styling
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
                  Promjena boje
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
                  Protein tretman
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
                  Maskara za kosu
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$40</p>
                  </span>
                </div>
              </div>
            </article>
          </section>
        </Slide>

        <div className="lg:block hidden">
          <Opacity>
            <Image
              src="/hairS.png"
              alt="Hand icon for prices"
              width={350}
              height={494}
              className="translate-y-[25.5px]"
            />
          </Opacity>
        </div>
      </main>
      <main
        id="services"
        className="bg-white flex items-center justify-center gap-28"
      >
        <div className="lg:block hidden">
          <Opacity>
            <Image
              src="/makeup.webp"
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
              Make up
            </h2>
            <p className="font-inter text-[#808080] text-center">
              Velit in dui dictum arcu felis tempor in feugiat in mauris
            </p>

            <article className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Daily make up
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    od <p className="text-[#6B0606]">$25</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Night make up
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
                  Bridal make up
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
                  Ocassion make up
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
                  Television make up
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$40</p>
                  </span>
                </div>
              </div>
            </article>
          </section>
        </Slide>
      </main>
      <main
        id="services"
        className="bg-white flex items-center justify-center gap-28"
      >
        <Slide>
          <section className="flex flex-col gap-7">
            <h2 className="text-[#6B0606] text-center font-bold font-abhaya text-5xl">
              Njega noktiju
            </h2>
            <p className="font-inter text-[#808080] text-center">
              Velit in dui dictum arcu felis tempor in feugiat in mauris
            </p>

            <article className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Manikura
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    od <p className="text-[#6B0606]">$25</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Pedikura
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
                  Francuska manikura
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
                  Manikura i gel
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$30</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">Gel</strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$40</p>
                  </span>
                </div>
              </div>
            </article>
          </section>
        </Slide>

        <div className="lg:block hidden">
          <Opacity>
            <Image
              src="/nails(1).png"
              alt="Hand icon for prices"
              width={350}
              height={494}
              className="translate-y-[25.5px]"
            />
          </Opacity>
        </div>
      </main>
      <main
        id="services"
        className="bg-white flex items-center justify-center gap-28"
      >
        <div className="lg:block hidden">
          <Opacity>
            <Image
              src="/cosmetics.png"
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
              Kozmetika
            </h2>
            <p className="font-inter text-[#808080] text-center">
              Velit in dui dictum arcu felis tempor in feugiat in mauris
            </p>

            <article className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">Botox</strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    od <p className="text-[#6B0606]">$25</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Kemijski piling
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
                  Lasersko obnavljanje kože
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
                  Lasersko uklanjanje dlačica
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
                  Uklanjanje tetovaža
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$40</p>
                  </span>
                </div>
              </div>
            </article>
          </section>
        </Slide>
      </main>
      <main
        id="services"
        className="bg-white flex items-center justify-center gap-28"
      >
        <Slide>
          <section className="flex flex-col gap-7">
            <h2 className="text-[#6B0606] text-center font-bold font-abhaya text-5xl">
              SPA
            </h2>
            <p className="font-inter text-[#808080] text-center">
              Velit in dui dictum arcu felis tempor in feugiat in mauris
            </p>

            <article className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Piling za tijelo i zaglađivanje
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    od <p className="text-[#6B0606]">$25</p>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-black font-inter w-full">
                  Indulge & relax
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
                  Mršavljenje i drenaža
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
                  Aromaterapija
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
                  Tretman oživljavanja stopala
                </strong>
                <hr className="h-1 w-full border-t-2 border-dotted border-[#808080]" />
                <div className="w-full">
                  <span className="text-[#808080] flex w-full gap-1 ml-3">
                    from <p className="text-[#6B0606]">$40</p>
                  </span>
                </div>
              </div>
            </article>
          </section>
        </Slide>

        <div className="lg:block hidden">
          <Opacity>
            <Image
              src="/spa.png"
              alt="Hand icon for prices"
              width={350}
              height={494}
              className="translate-y-[25.5px]"
            />
          </Opacity>
        </div>
      </main>
    </main>
  );
};

export default OptionalPrices;
