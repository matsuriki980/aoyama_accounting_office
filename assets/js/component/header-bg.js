/*
 ヘッダー背景色
*/

export const initializeHeaderBg = () => {
  const header = document.querySelector(".js-header");
  const triggerItem = document.querySelector(".js-trigger");
  const drawerBtn = document.querySelector(".js-btn-drawer");

  // 読み込み時に位置を取得し、表示・非表示を切り替える
  const initTriggerPassed = () => {
    const triggerTop = triggerItem.getBoundingClientRect().top;
    if (triggerTop < 0) {
      header.classList.add("is-active");
    }
  };

  initTriggerPassed();

  // トリガー要素を通過、かつドロワーメニューを閉じているときのみ背景表示
  let drawerPlug = false;
  let isTriggerPassed = false;

  const updateHeader = () => {
    if (!drawerPlug && isTriggerPassed) {
      header.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
    }
  };

  // クリックと同時に開閉状態を判定
  drawerBtn.addEventListener("click", () => {
    drawerPlug = !drawerPlug;
    updateHeader();
  });

  // 画面上部がトリガー要素の上部を超えたら背景表示
  window.addEventListener("scroll", () => {
    const triggerTop = triggerItem.getBoundingClientRect().top;
    isTriggerPassed = triggerTop < 0;
    updateHeader();
  });
};
