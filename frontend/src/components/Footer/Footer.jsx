import React from "react";

// components
import Container from "../Common/Container";
import Button from "../Common/Button";

// images
import logo from "../../assets/images/logo-dark.svg";
import { footerLinks, socials } from "../../constants/constants";

const Footer = () => {
  return (
    <footer className="w-full relative bg-[var(--dark-blue)] py-10">
      <Container>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* logo & socials */}
          <div className="flex flex-col items-center md:items-start gap-10 justify-between">
            {/* logo */}
            <div>
              <img src={logo} alt="Logo" />
            </div>
            {/* socials */}
            <div className="flex gap-6 items-center">
              {socials.map((social) => (
                <div key={social.id}>
                  <a href="#">
                    <social.img className="w-6 h-6" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* important links */}
          <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center md:place-items-start">
            {footerLinks.map((link) => (
              <div key={link.id}>
                <a
                  href="#"
                  className="hover:text-[--lime-green] transition-all duration-300"
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>

          {/* cta & rights */}
          <div>
            <div className="flex flex-col justify-between items-center gap-6 md:items-end">
              {/* cta */}
              <div className="block">
                <Button
                  label={`Request Invite`}
                  styles={`cta py-2 px-3 rounded-[30px] text-[--white] font-bold`}
                />
              </div>

              {/* rights */}
              <div className="text-center md:text-end">
                <p>© Easybank. All Rights Reserved</p>
                <span className="text-xs">
                  Challenge by
                  <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                  >
                    Frontend Mentor
                  </a>
                  . Coded by{" "}
                  <a href="https://github.com/Mwandamena">Kelvin Mwandamena</a>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
