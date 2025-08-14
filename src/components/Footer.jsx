import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4F46E5] text-white">
      <div className="max-w-7xl mx-auto px-6 py-9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="AT Digital Logo" className="h-8 mr-3" />
            </div>
            <p className="text-purple-100 text-sm leading-relaxed max-w-sm">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Technologies</h3>
              <ul className="space-y-2 text-purple-100">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    ReactJS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    Gatsby
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    NextJS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    NodeJS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-purple-100">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    Web & Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    Data & Analytics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-4">
          <div className="border-t border-white w-1/2 max-sm:w-[350px] mx-auto mb-2 max-sm:mb-2"></div>
          <div className="flex sm:flex-row justify-center items-center sm:space-y-0 sm:space-x-8 max-sm:gap-2">
            <a
              href="#"
              className="text-purple-100 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy Policy 
            </a>
            <span className=" text-white"> |</span>
            <a
              href="#"
              className="text-purple-100 hover:text-white transition-colors duration-200 text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}