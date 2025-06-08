// react

import Button from "../Common/Button";
import Container from "../Common/Container";

// images
import phone_mockups from "../../assets/images/image-mockups.png";
import Motion from "../Common/Motion";

const Hero = () => {
  return (
    <section className="hero w-full relative py-8">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between pb-24 md:pb-0">
          {/* left section */}
          <div className="mt-28 md:mt-6 flex flex-col gap-6 items-center md:items-start text-center md:text-start">
            <Motion del={0.25}>
              <h1 className="text-[var(--dark-blue)] font-medium text-[32px] md:text-[40px] lg:text-[48px]">
                Next generation <br /> digital banking
              </h1>
            </Motion>
            <Motion del={0.3}>
              <p className="text-xl md:pr-16">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
            </Motion>
            {/* cta */}
            <Motion del={0.3}>
              <div className="block">
                <Button
                  label={`Request Invite`}
                  styles={`cta py-2 px-3 rounded-[30px] text-[--white] font-bold`}
                />
              </div>
            </Motion>
          </div>

          {/* right section */}
          <div>
            <img
              src={phone_mockups}
              alt="Phone Mockups"
              className="w-full md:w-[76rem] md:translate-x-[20%] scale-[1.4] z-20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
