import Image from "next/image";
import Slide from "./animations/Slide";
import Fade from "./animations/Fade";

const Testimonials = () => {
  return (
    <main id="testemonials" className="overflow-hidden">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 flex flex-col">
          <div className="flex-1 bg-[#F3E2D5]" />
          <div className="flex-1 bg-white" />
        </div>

        <Slide>
          <div className="flex flex-col gap-5 items-center text-center mb-20">
            <h2 className="text-[#6B0606] font-abhaya text-5xl font-bold">
              Recenzije
            </h2>

            <p className="max-w-2xl text-[#6B0606]/70">
              Eleifend arcu non lorem justo in tempus purus gravida tortor
              egestas sed feugiat elementum
            </p>
          </div>
        </Slide>

        <Fade>
          <article className="bg-white max-w-5xl mx-auto p-16 relative shadow-sm">
            <svg
              width="88"
              height="68"
              viewBox="0 0 88 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-9 -left-11"
            >
              <path
                d="M80.7729 0L88 6.3354C83.3709 10.3713 79.5921 14.2664 76.6634 18.0207C73.8293 21.6812 72.0344 24.45 71.2786 26.3271C70.5228 28.2043 69.8143 30.4569 69.153 33.0849L69.7198 33.9296C76.0494 33.9296 80.6785 35.2905 83.6071 38.0124C86.5357 40.7343 88 44.9579 88 50.6832C88 55.0946 86.394 59.0835 83.182 62.6501C80.0644 66.2167 76.1439 68 71.4203 68C66.0354 68 61.548 66.4983 57.9581 63.4948C54.3682 60.4914 52.5733 55.6577 52.5733 48.9938C52.5733 40.1712 55.3129 31.0669 60.7923 21.6812C66.3661 12.2015 73.0263 4.97447 80.7729 0ZM28.1997 0L35.4267 6.3354C30.7976 10.3713 27.066 14.2195 24.2319 17.8799C21.3977 21.5404 19.5556 24.3561 18.7053 26.3271C17.9495 28.2981 17.241 30.5507 16.5797 33.0849L17.1465 33.9296C23.4761 33.9296 28.1052 35.2905 31.0338 38.0124C33.9624 40.7343 35.4267 44.9579 35.4267 50.6832C35.4267 55.0946 33.8207 59.0835 30.6087 62.6501C27.4911 66.2167 23.5706 68 18.847 68C13.4622 68 8.97477 66.4983 5.38486 63.4948C1.79495 60.4914 0 55.6577 0 48.9938C0 40.1712 2.73967 31.0669 8.219 21.6812C13.7928 12.2015 20.453 4.97447 28.1997 0Z"
                fill="#6B0606"
              />
            </svg>

            <svg
              className="absolute -top-10 -left-10"
              width="88"
              height="68"
              viewBox="0 0 88 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." fill="#6B0606" />
            </svg>

            <div className="flex flex-row-reverse gap-12 items-center justify-center">
              <div className="flex flex-col gap-5 max-w-105">
                <div className="flex gap-3 items-center">
                  <h5 className="text-[#6B0606] font-medium font-abhaya text-xl">
                    Michaela Hayden
                  </h5>

                  <span className="text-[#808080]">Happy client</span>
                </div>

                <p className="text-black">
                  Quis euismod eu eleifend tristique. Rutrum eget turpis semper
                  risus aliquam imperdiet amet. Quam bibendum ut eu sodales
                  viverra adipiscing viverra lorem elit.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <Image
                  src="/woman1.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full"
                />

                <div className="flex items-center">
                  <Image
                    src="/woman2.jpg"
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full -translate-x-8"
                  />

                  <svg
                    width="140"
                    height="8"
                    viewBox="0 0 140 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="6"
                      y1="4"
                      x2="140"
                      y2="4"
                      stroke="#DFBFA8"
                      strokeWidth="2"
                    />

                    <circle cx="4" cy="4" r="4" fill="#DFBFA8" />
                  </svg>
                </div>

                <Image
                  src="/woman1.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>

            <svg
              width="88"
              height="68"
              viewBox="0 0 88 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-9 -right-11"
            >
              <path
                d="M7.22705 68L0 61.6646C4.6291 57.6287 8.40794 53.7336 11.3366 49.9793C14.1707 46.3188 15.9656 43.55 16.7214 41.6729C17.4772 39.7957 18.1857 37.5431 18.847 34.9151L18.2802 34.0704C11.9506 34.0704 7.32153 32.7095 4.39291 29.9876C1.4643 27.2657 0 23.0421 0 17.3168C0 12.9054 1.60601 8.91649 4.81804 5.3499C7.93559 1.78329 11.8561 0 16.5797 0C21.9646 0 26.452 1.50172 30.0419 4.50517C33.6318 7.50863 35.4267 12.3423 35.4267 19.0062C35.4267 27.8288 32.6871 36.9331 27.2077 46.3188C21.6339 55.7985 14.9737 63.0255 7.22705 68ZM59.8003 68L52.5733 61.6646C57.2024 57.6287 60.934 53.7805 63.7681 50.1201C66.6023 46.4596 68.4444 43.6439 69.2947 41.6729C70.0505 39.7019 70.759 37.4493 71.4203 34.9151L70.8535 34.0704C64.5239 34.0704 59.8948 32.7095 56.9662 29.9876C54.0376 27.2657 52.5733 23.0421 52.5733 17.3168C52.5733 12.9054 54.1793 8.91649 57.3913 5.3499C60.5089 1.78329 64.4294 0 69.153 0C74.5378 0 79.0252 1.50172 82.6151 4.50517C86.205 7.50863 88 12.3423 88 19.0062C88 27.8288 85.2603 36.9331 79.781 46.3188C74.2072 55.7985 67.547 63.0255 59.8003 68Z"
                fill="#6B0606"
              />
            </svg>
          </article>
        </Fade>
      </section>
    </main>
  );
};

export default Testimonials;
