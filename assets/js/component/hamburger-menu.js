/*
  ハンバーガーメニュー
*/

export const initializeHamburgerMenu = () => {
  const drawer = document.querySelector(".js-drawer");
  const drawerBtn = document.querySelector(".js-btn-drawer");
  const headerLogo = document.querySelector(".js-header-logo");
  const headerContactBtn = document.querySelector(".js-btn-contact");
  const gnav = document.querySelector(".js-gnav");
  const hiddenItem = [gnav, headerContactBtn]; // ボタンとナビゲーションを配列化し一括スタイル指定可能に

  if (!drawer || !drawerBtn) return;

  // ==============================================
  // ボタンクリック時のクラス状態によって処理を分岐
  // ==============================================
  drawerBtn.addEventListener("click", () => {
    drawer.classList.toggle("is-open");
    drawerBtn.classList.toggle("is-open");

    const drawerPlag = drawer.classList.contains("is-open"); // ドロワーメニューのクラスを判定

    hiddenItem.forEach((item) => {
      if (drawerPlag) {
        headerLogo.style.backgroundColor = "var(--color-white)";
        item.style.opacity = "0";
        item.style.visibility = "hidden";
      } else if (!drawerPlag) {
        headerLogo.style.backgroundColor = "var(--color-primary)";
        item.style.opacity = "1";
        item.style.visibility = "visible";
      }
    });
  });
};
