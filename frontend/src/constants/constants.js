// icons
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// images
import ob from "../assets/images/icon-online.svg"; // online banking
import sb from "../assets/images/icon-budgeting.svg"; // simple budgeting
import fo from "../assets/images/icon-onboarding.svg"; // fast onboarding
import api from "../assets/images/icon-api.svg"; // open API
import blog1 from "../assets/images/image-currency.jpg"; // blog image 1
import blog2 from "../assets/images/image-restaurant.jpg"; // blog image 2
import blog3 from "../assets/images/image-plane.jpg"; // blog image 3
import blog4 from "../assets/images/image-confetti.jpg"; // blog image 4

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
    img: ob,
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 1,
    title: "Simple Budgeting",
    img: sb,
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 2,
    title: "Fast Onboarding",
    img: fo,
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 3,
    title: "Open API",
    img: api,
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const blogs = [
  {
    id: 0,
    img: blog1,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 1,
    img: blog2,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 2,
    img: blog3,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 3,
    img: blog4,
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
