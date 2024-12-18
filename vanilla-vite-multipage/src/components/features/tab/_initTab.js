import { Tabbed } from "./_tab";

/**
 * Ініціалізація табів з переданою конфігурацією.
 * @param {Object} cfg - Конфігурація для табів.
 * @param {HTMLElement} cfg.tab - Головний контейнер табів.
 * @param {NodeList} cfg.buttons - Кнопки для перемикання табів.
 * @param {NodeList} cfg.contents - Вміст для кожного табу.
 */

export function initTab(cfg) {
  if (!cfg.tab || !cfg.buttons || !cfg.contents) {
    console.error("Неповна конфігурація для табів:", cfg);
    return;
  }

  const tabbed = new Tabbed(cfg);
  tabbed.init();
}
