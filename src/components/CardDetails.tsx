"use client";

import { useState } from "react";

const CardDetails = () => {
  const [open, setOpen] = useState(true);
  if (open) {
    return (
      <>
        <div className="max-w-2xl mx-auto ">
          <div
            aria-hidden="true"
            className=" flex  fixed h-full  md:inset-0 z-50 justify-center items-center backdrop-blur-sm"
          >
            <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
              <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                    Podczas platnosci jako dane wpisz
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-900 text-base leading-relaxed dark:text-gray-400">
                    nr karty:{" "}
                    <span className="font-bold">4242 4242 4242 4242</span>{" "}
                    reszta <span className="font-bold">dowlona</span>
                  </p>
                </div>
                <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Zrozumiałem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default CardDetails;
