// react
import { useEffect, useState } from "react";

// images
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";

// constants
import { navLinks } from "../../constants/constants";

// components
import Button from "../Common/Button";
import Container from "../Common/Container";

// motion
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  // mobile nav state
  const [open, setOpen] = useState(false);

  // mobile nav funtion
  const handleMobileNav = () => {
    setOpen((current) => !current);
  };

  // close mobile nav when the user scrolls the page
  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 20) {
      setOpen(false);
    }
  };
  useEffect(() => {}, [window.addEventListener("scroll", handleScroll)]);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-lg z-20 py-4">
      {/* desktop menu */}
      <Container>
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* navbar links  */}
          <div className="hidden md:block h-full">
            <ul className="flex gap-6 justify-between items-center">
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  <a href={link.src} className="navlink">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* cta */}
          <div className="hidden md:block">
            <Button
              label={`Request Invite`}
              styles={`cta py-2 px-3 rounded-[30px] text-[--white] font-bold`}
            />
          </div>

          {/* mobile toggle btn */}
          <div className="block md:hidden">
            <span className="sr-only">Menu</span>
            <button className="pointer" onClick={() => handleMobileNav()}>
              {open ? (
                <img src={close} alt="Close menu" />
              ) : (
                <img src={menu} alt="Menu" />
              )}
            </button>
          </div>
        </div>

        {/* mobile version */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
                transition={{
                  duration: 0.1,
                }}
                className="fixed md:hidden top-20 w-11/12 bg-white py-6 flex items-center flex-col gap-6 shadow-xl rounded-md z-30"
              >
                <ul className="text-[var(--dark-blue)] flex flex-col gap-4 items-center">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.id}
                      initial={{
                        y: 20,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: link.id * 0.1,
                        },
                      }}
                    >
                      <a href="#">{link.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="fixed top-[59px] left-0 md:hidden bg-black/60 w-full h-full"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                  },
                }}
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navbar;
