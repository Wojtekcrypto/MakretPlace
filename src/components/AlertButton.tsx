"use client";

import { useState } from "react";

const AlertButton = () => {
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
                    Zaloguj się używając któregoś z podnaych kont
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-900 text-base leading-relaxed dark:text-gray-400">
                    login: <span className="font-bold">uzytkownik@test.pl</span>{" "}
                    haslo: <span className="font-bold">haslo123</span>
                  </p>
                  <p className="text-gray-900 text-base leading-relaxed dark:text-gray-400">
                    login: <span className="font-bold">sprzedawca@test.pl</span>{" "}
                    haslo: <span className="font-bold">haslo123</span>
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
export default AlertButton;

// <div className="">
//   Użyj<span className="">uzytkownik1@test.pl</span>{" "}
// </div>
// <button onClick={() => setOpen(false)}>X</button>

{
  /* <div className="max-w-2xl mx-auto">

    <!-- Modal toggle -->


    <!-- Main modal -->
    <div id="default-modal" data-modal-show="true" aria-hidden="true" className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
        <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
            <!-- Modal content -->
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                <!-- Modal header -->
                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                        Zaloguj się używając któregoś z podnaych kont
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <!-- Modal body -->
                <div className="p-6 space-y-6">
                    <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                       login: uzytkownik1@test.pl haslo: haslo123
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                     login: sprzedawca1@test.pl haslo: haslo123
                    </p>
                </div>
                <!-- Modal footer -->
                <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-toggle="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Zrozumiałem</button>
                  
                </div>
            </div>
        </div>
    </div>
 */
}
