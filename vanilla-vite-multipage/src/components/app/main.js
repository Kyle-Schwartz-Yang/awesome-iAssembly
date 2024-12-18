import "./main.scss";
// ------------------------------------------

import { initTab } from "@features/tab/_initTab";

const cfg = {
  tab: document.querySelector(".tab"),
  buttons: document.querySelectorAll(".tab__button"),
  contents: document.querySelectorAll(".tab__txt"),
};

initTab(cfg);
