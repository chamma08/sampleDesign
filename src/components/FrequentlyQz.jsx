import React, { useState } from "react";

export default function FrequentlyQz() {
  const [openItems, setOpenItems] = useState([]);

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 mx-auto min-h-screen">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#4F46E5] px-2">
        Frequently asked questions
      </h1>

      <div className="space-y-3 sm:space-y-4 px-2 sm:px-4 max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF8FF] rounded-lg border border-gray-200 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-start sm:items-center gap-3"
            >
              {openItems.includes(index) ? (
                <div className="flex-1 min-w-0">
                  <div className="text-[#4F46E5] font-semibold leading-relaxed text-sm sm:text-base break-words">
                    {item.question}
                  </div>
                </div>
              ) : (
                <span className="font-medium text-black flex-1 min-w-0 text-sm sm:text-base break-words">
                  {item.question}
                </span>
              )}

              <span
                className={`text-xl sm:text-2xl flex-shrink-0 cursor-pointer transition-colors duration-200 ${
                  openItems.includes(index) ? "text-[#4F46E5]" : "text-black"
                }`}
              >
                {openItems.includes(index) ? "−" : "+"}
              </span>
            </button>

            {openItems.includes(index) && (
              <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                <div className="text-[#6F6C90] leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}