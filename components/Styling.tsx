import Slide from "./animations/Slide";
import CosmeticIcon from "./Icons/CosmeticIcon";
import HairStyling from "./Icons/HairStyling";
import MakeupIcon from "./Icons/MakeupIcon";
import NailIcon from "./Icons/NailIcon";
import StylingCard from "./StylingCard";

const Styling = () => {
  return (
    <main className="bg-white px-18 py-16 flex flex-col gap-12">
      <Slide>
        <section className="max-w-206.75 m-auto flex flex-col gap-5 items-center justify-center text-center">
          <h2 className="font-abhaya text-5xl text-[#6B0606] font-bold">
            Prava elegancija je biti jednako lijep iznutra i izvana
          </h2>
          <p className="text-[#bfbfbf] font-inter">
            Vjerujemo da ljepota dolazi iz sklada njege, opuštanja i
            samopouzdanja. Naši tretmani osmišljeni su kako bi naglasili ono
            najbolje u vama i pružili vam iskustvo potpune njege.
          </p>
        </section>
      </Slide>

      <section className="flex gap-6 items-center justify-center flex-wrap">
        <StylingCard icon={<MakeupIcon />} title="make up" img="/makeup.jpg" />
        <StylingCard
          icon={<HairStyling />}
          title="hair styling"
          img="/hairStyling.avif"
        />
        <StylingCard
          icon={<NailIcon />}
          title="njega noktiju"
          img="/nailCare.png"
        />
        <StylingCard
          icon={<CosmeticIcon />}
          title="kozmetika"
          img="/cosmetic.jpg"
        />
      </section>
    </main>
  );
};

export default Styling;
