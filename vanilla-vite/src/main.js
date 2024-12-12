import "./components/app/app.scss";
import { Tabbed } from "./components/features/tab/tab";

function initTab() {
  const cfg = {
    tab: document.querySelector(".tab"),
    buttons: document.querySelectorAll(".tab__button"),
    contents: document.querySelectorAll(".tab__txt"),
  };

  const tabbed = new Tabbed(cfg);
  tabbed.init();
}

initTab();
