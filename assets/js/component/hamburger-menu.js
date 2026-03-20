/*
  ハンバーガーメニュー
*/

export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-menu");
  const openBtn = document.querySelector(".js-menu__button_open");
  const cloceBtn = document.querySelector(".js-menu__button_close");
  // const closeBtn = document.querySelector(".js-header-menu-close-button");

  // if (!menu || !openBtn || !cloceBtn) return;

  openBtn.addEventListener("click", () => {
    menu.showModal();
  });
};
