import "./components/app/app.scss";

import { initApp } from "./components/app/app";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

import viteLogo from "@/body.png";

const image = (document.querySelector("#image").src = viteLogo);

console.log(image);
