import { ReactNode } from "react";

type TimeLineItemProps = {
  title: string;
  descrition: string;
  directionText: "left" | "right";
  children: ReactNode;
  parallax: ReactNode;
};

export default function ParallaxItem({
  title,
  descrition,
  directionText,
  children,
  parallax,
}: TimeLineItemProps) {
  return (
    <div>
      {parallax}
      <div className="max-w-6xl h-auto mx-auto py-12 md:py-20 md:h-svh">
        <div className="grid gap-20">
          {directionText === "left" && (
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                {children}
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-6 ml-8"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3"> {title}</h3>
                  <p className="text-xl text-gray-400 mb-4 mr-2">
                    {descrition}
                  </p>
                </div>
              </div>
            </div>
          )}

          {directionText === "right" && (
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                {children}
              </div>
              {/* Content */}
              <div
                className="max-w-xl ml-3 md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 "
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">{title}</h3>
                  <p className="text-xl text-gray-400 mr-6 mb-4">
                    {descrition}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
