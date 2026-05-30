import Image from "next/image";
import Slide from "./animations/Slide";

const Contact = () => {
  return (
    <main
      id="contact"
      className="bg-[#F3E2D5] p-16 flex items-center justify-center"
    >
      <Slide>
        <section className="max-w-269 flex justify-center gap-10 bg-[white] relative p-16">
          <Image
            src="/formImg.jpeg"
            alt="Woman in form wrapper"
            className="object-center shrink-0 min-[940px]:block hidden"
            width={500}
            height={537}
          />
          <article className="flex flex-col gap-6">
            <p className="text-[#6B0606] font-medium">KOZMETIČKI SALON</p>
            <h4 className="font-abhaya font-bold text-[40px] text-black">
              Rezervirajte termin
            </h4>
            <p className="text-black">
              Mi senectus ac ullamcorper sollicitudin volutpat sit a velit.
              Purus scelerisque
            </p>

            <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-black block">Ime</label>
                <input
                  className="px-4 py-2 border border-[#808080] w-full placeholder:text-black"
                  type="text"
                  placeholder="Ime"
                />
              </div>
              <div>
                <label className="text-black block">Prezime</label>
                <input
                  className="px-4 py-2 border border-[#808080] w-full placeholder:text-black"
                  type="text"
                  placeholder="Prezime"
                />
              </div>
              <div>
                <label className="text-black block">Email</label>
                <input
                  className="px-4 py-2 border border-[#808080] w-full placeholder:text-black"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="text-black block">Telefon</label>
                <input
                  className="px-4 py-2 border border-[#808080] w-full placeholder:text-black"
                  type="tel"
                  placeholder="Telefon"
                />
              </div>
              <div>
                <label className="text-black block">Datum rezervacije</label>
                <input
                  className="px-4 py-2 text-black border border-[#808080] w-full placeholder:text-black"
                  type="date"
                  placeholder="Datum"
                />
              </div>
              <div>
                <label className="text-black block">Vrijeme</label>
                <input
                  className="px-4 py-2 border text-black border-[#808080] w-full placeholder:text-black"
                  type="time"
                  placeholder="Vrijeme"
                />
              </div>
              <div>
                <label className="text-black block">Tretman</label>
                <select className="px-4 py-2 text-black border border-[#808080] w-full placeholder:text-black">
                  <option>Njega noktiju</option>
                  <option>Šišanje</option>
                  <option>Make up</option>
                  <option>Kozmetika</option>
                  <option>Spa tretmani</option>
                </select>
              </div>

              <button className="col-span-1 sm:col-span-2 bg-[#6B0606] px-4 py-2 font-abhaya font-bold cursor-pointer text-2xl">
                Rezerviraj
              </button>
            </form>
          </article>
        </section>
      </Slide>
    </main>
  );
};

export default Contact;
