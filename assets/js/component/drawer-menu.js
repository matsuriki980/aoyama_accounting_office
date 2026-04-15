/*
  ドロワーメニュー
*/

export const initializeDrawerMenu = () => {
  // ==============================================
  // ドロワーメニュー開閉処理を書く
  // ==============================================
  const toggleDrawer = () => {
    const drawer = document.querySelector(".js-drawer");
    const drawerBtn = document.querySelector(".js-btn-drawer");
    const headerLogo = document.querySelector(".js-header-logo");
    const headerContactBtn = document.querySelector(".js-btn-contact");
    const gnav = document.querySelector(".js-gnav");
    const hiddenItem = [gnav, headerContactBtn]; // ボタンとナビゲーションを配列化し一括スタイル指定可能に

    if (!drawer || !drawerBtn) return;

    // ボタンクリック時のクラス状態によって処理を分岐
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

  // ==============================================
  // リンクホバーによる画像切り替え処理を書く
  // ==============================================
  const updateDrawerImageOnHover = () => {
    const drawerItems = document.querySelectorAll(".js-drawer__item");
    const drawerImgArea = document.querySelector(".js-drawer__img");
    const drawerImgs = drawerImgArea.querySelectorAll("img");

    drawerItems.forEach((item) => {
      const itemLink = item.querySelectorAll(
        ".l-drawer__link, .l-drawer__secondary-link",
      );

      itemLink.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          const itemData = link.closest(".js-drawer__item").dataset.item; // ホバーしたリンクの一番外の親要素のdata値を取得
          const img = drawerImgArea.querySelector(`[data-img="${itemData}"]`); // ホバーしたリンクの一番外の親要素とdata値が一致する画像を取得

          // 一度全ての画像を非表示
          drawerImgs.forEach((i) => {
            gsap.to(i, {
              opacity: 0,
            });
          });

          gsap.to(img, {
            opacity: 1,
          });
        });
      });
    });
  };

  // ページ読み込み時に呼び出す関数
  toggleDrawer();
  updateDrawerImageOnHover();
};
