import { motion } from "framer-motion";

const fadeDown = (delay = 0) => ({
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
        <img
          src="/hero.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 lg:left-12 lg:right-auto lg:bottom-16 xl:left-20 xl:bottom-20">
          <div className="bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] lg:w-[800px] rounded-none sm:rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 xl:p-12 max-w-full lg:max-w-[630px]">
            <motion.h1
              variants={fadeDown(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-white font-bold leading-tight mb-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
            >
              We Crush Your
              <br />
              Competitors, Goals, And
              <br />
              Sales Records – Without
              <br />
              The B.S.
            </motion.h1>

            <motion.button
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#F28D35] hover:bg-orange-500 text-white font-semibold py-3 px-6 lg:py-4 lg:px-8 rounded shadow-md transition-colors text-sm sm:text-base cursor-pointer"
            >
              GET FREE CONSULTATION
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
