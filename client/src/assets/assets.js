import logo from "./logo.svg";
import logo_icon from "./logo_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import header_img from "./header_img.png";
import remove_bg_icon from "./remove_bg_icon.svg";
import upload_btn_icon from "./upload_btn_icon.svg";
import upload_icon from "./upload_icon.svg";
import download_icon from "./download_icon.svg";
import image_w_bg from "./image_w_bg.png";
import image_wo_bg from "./image_wo_bg.png";
import facebook_icon from "./facebook_icon.svg";
import google_plus_icon from "./google_plus_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import credit_icon from "./credit_icon.png";
import mainLogo from "./mainLogo.jpg";
import women1 from "./woman (1).png";
import women2 from "./woman.png";
import boy from "./boy.png";

export const assets = {
  logo,
  logo_icon,
  mainLogo,
  arrow_icon,
  header_img,
  remove_bg_icon,
  upload_icon,
  download_icon,
  image_w_bg,
  image_wo_bg,
  facebook_icon,
  google_plus_icon,
  twitter_icon,
  upload_btn_icon,
  credit_icon,
  women1,
  women2,
  boy,
};

export const testimonialsData = [
  {
    id: 1,
    text: "I've used bg.removal for two years on Instagram; it's super simple and efficient.",
    author: "Richard Nelson",
    image: profile_img_1,
    jobTitle: "Web Developer",
  },
  {
    id: 2,
    text: "Using bg.removal for six months, I love the quality. Everyone should try it!",
    author: "Donald Jackman",
    image: profile_img_2,
    jobTitle: "UI Designer",
  },
  {
    id: 4,
    text: "Absolutely amazing! This product completely exceeded my high expectations!",
    author: "Priya Sharma",
    jobTitle: "Graphic Designer",
    image: women1,
  },
  {
    id: 5,
    text: "Quick delivery, great quality! This is an absolute must-have for everyone.",
    author: "Rohan Verma",
    jobTitle: "Software Engineer",
    image: boy,
  },
  {
    id: 6,
    text: "Best customer service ever! They truly care about their customers' experience!",
    author: "Sneha Kapoor",
    jobTitle: "Marketing Specialist",
    image: women2,
  },
];

export const plans = [
  {
    id: "Basic",
    price: 10,
    credits: 100,
    desc: "Best for personal use.",
  },
  {
    id: "Advanced",
    price: 50,
    credits: 500,
    desc: "Best for business use.",
  },
  {
    id: "Business",
    price: 250,
    credits: 5000,
    desc: "Best for enterprise use.",
  },
];
