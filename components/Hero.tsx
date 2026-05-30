import Image from "next/image";
import Fade from "./animations/Fade";
import ShowUp from "./animations/ShowUp";

const Hero = () => {
  return (
    <main className="bg-white relative h-screen flex flex-col gap-11 items-center">
      <Fade>
        <h1 className="text-8xl text-[#6B0606] font-imperial text-center">
          Beauty Salon
        </h1>
      </Fade>
      <ShowUp width={true}>
        <Image
          src="/hero.jpg"
          className="w-full h-150 object-cover"
          alt="Hero background"
          width={1420}
          height={520}
        />
      </ShowUp>
    </main>
  );
};

export default Hero;
