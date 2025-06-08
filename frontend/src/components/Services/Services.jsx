import React from "react";
import Container from "../Common/Container";
import { services } from "../../constants/constants";
import Motion from "../Common/Motion";

const Services = () => {
  return (
    <section className="relative w-full bg-[--light-grayish-blue] -z-10 pb-10 text-center md:text-start">
      <Container>
        <div className="my-20 flex flex-col gap-8">
          {/* upper section */}
          <div>
            <Motion del={0.25}>
              <h2 className="text-[var(--dark-blue)] font-medium text-[36px]">
                Why choose Easybank?
              </h2>
            </Motion>
            <Motion del={0.3}>
              <p className="mt-6">
                We leverage Open Banking to turn your bank account into your
                financial hub.
              </p>
              <p>Control your finances like never before.</p>
            </Motion>
          </div>

          {/* services section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <Motion key={item.id} del={0.4} i={item.id}>
                <div className="flex flex-col items-center md:items-start gap-4">
                  {/* service image */}
                  <div>
                    <img src={item.img} alt={item.title} />
                  </div>
                  {/* service title */}
                  <div>
                    <h3 className="text-[var(--dark-blue)] font-medium text-[24px]">
                      {item.title}
                    </h3>
                  </div>
                  {/* service description */}
                  <div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
