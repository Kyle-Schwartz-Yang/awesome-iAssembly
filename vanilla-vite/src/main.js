import "./components/app/app.scss";
// ------------------------------------------
import { initApp } from "./components/app/app";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

import logo from "@/vite.svg";

const imagesLogo = document.querySelector("#image");
imagesLogo.src = logo;
console.log(imagesLogo);
