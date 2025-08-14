
export default function Services() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row md:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0">
            <img
              src="/s1.png"
              alt="Web & Mobile App Development"
              className="w-80 h-80 object-contain"
            />
          </div>

          <div className="flex-1 text-center lg:text-left md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4F46E5] mb-6">
              Web & Mobile App Development
            </h2>
            <p className="text-black text-[16px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 md:mx-0">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button className="bg-[#F28D35] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 cursor-pointer">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0">
            <img
              src="/s2.png"
              alt="Digital Strategy Consulting"
              className="w-80 h-80 object-contain"
            />
          </div>

          <div className="flex-1 text-center lg:text-left md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4F46E5] mb-6">
              Digital Strategy Consulting
            </h2>
            <p className="text-black text-[16px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 md:mx-0">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="bg-[#F28D35] hover:bg-orange-600  text-white font-semibold px-6 py-3 rounded transition-colors duration-200 cursor-pointer">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
