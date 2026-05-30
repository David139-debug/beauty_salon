import Opacity from "./animations/Opacity";

const Location = () => {
  return (
    <main id="location" className="flex flex-col gap-10 bg-white pt-20">
      <section className="flex flex-col gap-10">
        <h3 className="text-[#6B0606] text-5xl font-abhaya text-center">
          Posjetite nas
        </h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="520"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-3xl"
        />
      </section>

      <section className="grid grid-cols-1 min-[1411px]:grid-cols-3 items-center px-28">
        <Opacity>
          <article className="flex flex-col gap-10 items-center">
            <h5 className="text-[#6B0606] text-3xl font-abhaya font-bold">
              Adresa
            </h5>
            <div className="flex flex-col items-center">
              <p className="max-w-90.75 text-center text-3xl text-black">
                19 North Road Piscataway, NJ 08854
              </p>
              <svg
                className="-translate-y-22"
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M157.5 75C157.5 127.5 90 172.5 90 172.5C90 172.5 22.5 127.5 22.5 75C22.5 57.0979 29.6116 39.929 42.2703 27.2703C54.929 14.6116 72.0979 7.5 90 7.5C107.902 7.5 125.071 14.6116 137.73 27.2703C150.388 39.929 157.5 57.0979 157.5 75Z"
                  stroke="#6B0606"
                  strokeOpacity="0.03"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M90 97.5C102.426 97.5 112.5 87.4264 112.5 75C112.5 62.5736 102.426 52.5 90 52.5C77.5736 52.5 67.5 62.5736 67.5 75C67.5 87.4264 77.5736 97.5 90 97.5Z"
                  stroke="#6B0606"
                  strokeOpacity="0.03"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </article>
        </Opacity>

        <Opacity>
          <article className="flex flex-col gap-10 items-center">
            <h5 className="text-[#6B0606] text-3xl font-abhaya font-bold">
              Email
            </h5>
            <div className="flex flex-col items-center">
              <p className="max-w-90.75 text-center text-3xl text-black z-10">
                gamma@sbcglobal.net
              </p>
              <svg
                className="-translate-y-15 z-0"
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 30H150C158.25 30 165 36.75 165 45V135C165 143.25 158.25 150 150 150H30C21.75 150 15 143.25 15 135V45C15 36.75 21.75 30 30 30Z"
                  stroke="#FAF7F7"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M165 45L90 97.5L15 45"
                  stroke="#FAF7F7"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </article>
        </Opacity>

        <Opacity>
          <article className="flex flex-col gap-10 items-center">
            <h5 className="text-[#6B0606] text-3xl font-abhaya font-bold">
              Telefon
            </h5>
            <div className="flex flex-col items-center">
              <p className="max-w-90.75 text-center text-3xl text-black z-10">
                (246) 917-5787 <br /> (979) 353-9935
              </p>
              <svg
                className="-translate-y-15 z-0"
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M164.997 126.901V149.401C165.005 151.489 164.577 153.557 163.741 155.471C162.904 157.385 161.677 159.103 160.137 160.515C158.598 161.927 156.781 163.002 154.802 163.671C152.824 164.34 150.727 164.589 148.647 164.401C125.568 161.893 103.399 154.007 83.9218 141.376C65.8005 129.861 50.4368 114.497 38.9218 96.3757C26.2466 76.8098 18.3586 54.5332 15.8968 31.3507C15.7094 29.2767 15.9559 27.1864 16.6206 25.2129C17.2853 23.2394 18.3536 21.4259 19.7576 19.8879C21.1615 18.3499 22.8703 17.121 24.7752 16.2796C26.6801 15.4382 28.7394 15.0027 30.8218 15.0007H53.3218C56.9616 14.9649 60.4903 16.2538 63.25 18.6272C66.0098 21.0006 67.8124 24.2966 68.3218 27.9007C69.2715 35.1012 71.0327 42.1712 73.5718 48.9757C74.5809 51.6602 74.7993 54.5776 74.2011 57.3823C73.6029 60.1871 72.2133 62.7616 70.1968 64.8007L60.6718 74.3257C71.3485 93.1023 86.8952 108.649 105.672 119.326L115.197 109.801C117.236 107.784 119.81 106.395 122.615 105.796C125.42 105.198 128.337 105.417 131.022 106.426C137.826 108.965 144.896 110.726 152.097 111.676C155.74 112.19 159.067 114.025 161.446 116.832C163.824 119.639 165.088 123.223 164.997 126.901Z"
                  stroke="#FAF7F7"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </article>
        </Opacity>
      </section>
    </main>
  );
};

export default Location;
