"use client";

import { Card } from "@/types/cardType";
import Image from "next/image";
import { motion } from "framer-motion";

const StylingCard = ({ icon, title, img }: Card) => {
  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, transition: { duration: 0.8, delay: 1 } }}
    >
      <Image
        className="object-cover w-76.5 h-80"
        src={img}
        alt="Style Card image"
        width={306}
        height={320}
      />
      <div className="absolute inset-0 bg-black/20" />
      <article className="flex sm:flex-row flex-col items-center gap-0 sm:gap-6 absolute bottom-6 left-6">
        <div className="bg-white p-2">{icon}</div>
        <p className="font-abhaya text-white font-bold text-[32px] mt-5">
          {title}
        </p>
      </article>
    </motion.section>
  );
};

export default StylingCard;
