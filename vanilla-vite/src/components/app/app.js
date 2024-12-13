import { initTab } from "../features/tab/initTab";

export const initApp = () => {
  initTab({
    tab: document.querySelector(".tab"),
    buttons: document.querySelectorAll(".tab__button"),
    contents: document.querySelectorAll(".tab__txt"),
  });
};
