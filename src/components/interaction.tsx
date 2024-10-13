"use client";

import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

import { Fragment, useEffect, useState } from "react";

export default function Interaction() {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseOver, setMouseHover] = useState(false);
  const [touchStart, setTouchStart] = useState(false);
  const [posicaox, setPosicaox] = useState(0);
  const [posicaoy, setPosicaoy] = useState(185);

  useEffect(() => {
    if (mouseOver) {
      const novoX = Math.random() * 150; // Subtrai 100 para garantir que o elemento não ultrapasse a borda direita
      const novoY = Math.random() * 350; // Subtrai 100 para garantir que o elemento não ultrapasse a borda inferior
      setPosicaox(Math.round(novoX));
      setPosicaoy(Math.round(novoY));
    }
  }, [mouseOver]);

  const handleMouseEnter = () => {
    setMouseHover(true);
  };

  const handleMouseEnd = () => {
    setMouseHover(false);
  };

  return (
    <section className="bg-white relative h-svh w-svw">
      <div className="mx-auto h-svh relative">
        {/* Section header */}
        <div className="max-w-6xl px-4 sm:px-6 mx-auto text-center pb-12 md:pb-16 h-full flex flex-col justify-center items-center">
          <h1
            className="h1 text-6xl font-normal mb-4 font-love"
            data-aos="fade-up"
          >
            Confirme sua presença
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className="border-2 border-green-300 h-auto py-3 px-5 rounded-md cursor-pointer m-3 text-lg inline-block transition ease-in-out duration-300 delay-150 hover:scale-125"
          >
            Confirmar!
          </button>
          <motion.div
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseEnd}
            animate={{
              x: posicaox,
              y: posicaoy,
              scale: 1,
              rotate: 0,
              position: "absolute",
            }}
          >
            <button
              className={`border-2 border-red-400  inline-block py-3 px-5 rounded-md m-3 text-lg cursor-none`}
            >
              Não poderei ir 😭
            </button>
          </motion.div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col justify-center items-center  w-full h-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-center">
                  <div className="h-auto w-full  bg-cover bg-center">image</div>
                  <div className="flex justify-center items-center w-full text-center">
                    <h1 className="h3 font-love font-normal text-green-700">
                      Para confirmar
                    </h1>
                  </div>

                  <p className="text-lg text-center">acesse o link</p>
                  <a href="#">link</a>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
