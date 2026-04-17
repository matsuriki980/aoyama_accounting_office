/*
  ドロワーメニュー
*/

export const initializeDrawerMenu = () => {
  const toggleDrawer = () => {
    const header = document.querySelector(".js-header");
    const drawer = document.querySelector(".js-drawer");
    const drawerBtn = document.querySelector(".js-btn-drawer");

    if (!drawerBtn || !drawer) return;

    drawerBtn.addEventListener("click", () => {
      drawer.classList.toggle("is-open");
      header.classList.toggle("is-drawer-open");
    });
  };

  const hoverImgDrawer = () => {
    const drawerImgArea = document.querySelector(".js-drawer__img");
    const drawerImg = drawerImgArea.querySelectorAll("img");
    const drawerItem = document.querySelectorAll(".js-drawer__item");

    drawerItem.forEach((item) => {
      // 各drawer-item内のすべてのリンクを取得する
      const drawerLink = item.querySelector(".l-drawer__link");
      const drawerSecondLink = item.querySelectorAll(
        ".l-drawer__secondary-link",
      );

      // 各リンクを配列化
      const hoverLinkItem = [drawerLink, ...drawerSecondLink];

      hoverLinkItem.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          // 一度すべての画像からクラスを外す
          drawerImg.forEach((img) => {
            img.classList.remove("is-active");
          });

          // ホバーしたリンクの親itemのデータを取得
          const itemData = link.closest(".js-drawer__item").dataset.item;

          // 取得したdata値に一致する画像を取得し表示する
          const activeImg = drawerImgArea.querySelector(
            `[data-img = "${itemData}"]`,
          );

          activeImg.classList.add("is-active");
        });
      });
    });
  };

  toggleDrawer();
  hoverImgDrawer();
};
