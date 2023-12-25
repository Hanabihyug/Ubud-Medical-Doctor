import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Testimonials() {
  const data = [
    {testi:   
"Warmth, competence, and a commitment to patient well-being this clinic has it all.",
    },
    {testi:   
      "An excellent blend of expertise and compassion. Highly recommended for quality care.",
          },
          {testi:   
            "Outstanding care! The staff's expertise and warmth made my experience truly remarkable.",
                },
                {testi:   
                  "Efficient, friendly, and caring—a winning combination for a healthcare provider.",
                      },
                      {testi:   
                        "An amazing team dedicated to providing exceptional care. I couldn't be happier with my experience.",
                            },
  ];

  const [currIdx, setCurrIdx] = useState(0);

  return (
    <div className="py-28 bg-main-100" id="Testimoni">
      <div className="w-11/12 2xl:w-[1440px] mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className=" text-3xl font-bold text-main-800 text-center">
            What Our Customer Saying
          </h1>
          <div className=" border-b-2 border-2 border-main-700 w-11 mt-4"></div>
        </div>
        <div className="overflow-hidden max-w-[1000px] mx-auto">
          <div
            className="flex transition-transform duration-300 ease-in-out transform"
            style={{
              width: `${data.length * 100}%`,
              transform: `translateX(-${(currIdx / data.length) * 100}%)`,
            }}
          >
            {/* {data.map((card, index) => (
                <div
                    key={index}
                    className="w-full flex items-center justify-center p-4"
                >
                    <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-lg font-semibold mb-2">{card.nama}</h2>
                    <p>{card.testi}</p>
                    </div>
                </div>
                ))} */}

            {data.map((data, idx) => (
              <div
                key={idx}
                className="w-full flex items-center justify-center p-4"
              >
                <div className="p-8 h-full bg-gradient-to-tr from-main-800 to-main-500 text-white rounded-3xl flex flex-col items-center justify-between">
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-medium my-4 mx-auto max-w-[auto] text-center">
                      "{data.testi}"
                    </p>
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-white/90 underline underline-offset-4 text-center">
                      {data.nama}
                    </h6>
                    <p className="text-lg font-medium text-white/70 text-center">
                      {data.work}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 justify-center mt-5">
          <FaArrowLeft
            className="text-xl text-main-600"
            onClick={() =>
              setCurrIdx(currIdx === 0 ? data.length - 1 : currIdx - 1)
            }
          />
          <FaArrowRight
            className="text-xl text-main-600"
            onClick={() =>
              setCurrIdx(currIdx === data.length - 1 ? 0 : currIdx + 1)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
