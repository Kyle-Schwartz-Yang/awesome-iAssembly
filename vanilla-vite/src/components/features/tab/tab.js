/*Использование:

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
*/

export class Tabbed {
  constructor(config) {
    this.tab = config.tab;
    this.buttons = config.buttons;
    this.contents = config.contents;
    this.active = config.active || "_active";
  }

  init() {
    if (!this.buttons || !this.contents) {
      console.warn(
        "toggleSelector или contentSelector не найдены. Инициализация отменена."
      );
      return;
    }

    if (this.buttons.length > 0) {
      this.handleToggleButton(this.buttons);
    }
    return;
  }

  handleToggleButton(buttons) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const buttonAttribut = btn.dataset.toggle;

        if (!btn.classList.contains("active")) {
          this.removeActiveClases();
          btn.classList.add("active");
        }

        this.setActiveContent(buttonAttribut);
      });
    });
  }

  setActiveContent(buttonAttribut) {
    this.contents.forEach((content) => {
      const contentAttribut = content.dataset.content;

      if (contentAttribut.includes(buttonAttribut) || !buttonAttribut) {
        if (!content.classList.contains("active")) {
          content.classList.add("active");
        }
      } else {
        content.classList.remove("active");
      }
    });
  }

  removeActiveClases() {
    this.buttons.forEach((button) => button.classList.remove("active"));
    this.contents.forEach((content) => content.classList.remove("active"));
  }
}
