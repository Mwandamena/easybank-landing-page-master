// icons
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// all the constants for the website

const navLinks = [
  {
    id: 0,
    title: "Home",
    src: "/",
  },
  {
    id: 1,
    title: "About",
    src: "/about",
  },
  {
    id: 2,
    title: "Contact",
    src: "/contact",
  },
  {
    id: 3,
    title: "Blog",
    src: "/blog",
  },
  {
    id: 4,
    title: "Careers",
    src: "/careers",
  },
];

const services = [
  {
    id: 0,
    title: "Online Banking",
    img: "/src/assets/images/icon-online.svg",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 1,
    title: "Simple Budgeting",
    img: "/src/assets/images/icon-budgeting.svg",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 2,
    title: "Fast Onboarding",
    img: "/src/assets/images/icon-onboarding.svg",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 3,
    title: "Open API",
    img: "/src/assets/images/icon-api.svg",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const blogs = [
  {
    id: 0,
    img: "/src/assets/images/image-currency.jpg",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 1,
    img: "/src/assets/images/image-restaurant.jpg",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 2,
    img: "/src/assets/images/image-plane.jpg",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 3,
    img: "/src/assets/images/image-confetti.jpg",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

const socials = [
  { id: 0, title: "facebook", img: FaFacebook },
  { id: 1, title: "youtube", img: FaYoutube },
  { id: 2, title: "twitter", img: FaTwitter },
  { id: 3, title: "pinterest", img: FaPinterest },
  { id: 4, title: "instagram", img: FaInstagram },
];

const footerLinks = [
  { id: 0, title: "About Us" },
  { id: 1, title: "Blog" },
  { id: 2, title: "Contact" },
  { id: 3, title: "Careers" },
  { id: 4, title: "Support" },
  { id: 5, title: "Privacy Policy" },
];

export { navLinks, services, blogs, socials, footerLinks };
