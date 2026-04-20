/*
 ヘッダー背景色
*/

export const initializeHeaderBg = () => {
  const header = document.querySelector(".js-header");
  const triggerItem = document.querySelector(".js-header-trigger");
  const drawerBtn = document.querySelector(".js-btn-drawer");

  if (!header || !triggerItem || !drawerBtn) return;

  // リロード時の位置に応じて表示を切り替え
  const initTriggerPassed = () => {
    const triggerTop = triggerItem.getBoundingClientRect().top; //画面上部からトリガー要素上部の距離を計算
    if (triggerTop < 0) {
      header.classList.add("is-active");
    }
  };

  initTriggerPassed();

  // プラグでトリガー要素通過、ドロワーメニューの状態を判定
  let drawerPlug = false;
  let isTriggerPassed = false;

  // トリガー要素を通過かつ、ドロワーメニューが閉じているときに背景表示
  const headerIsActive = () => {
    if (isTriggerPassed && !drawerPlug) {
      header.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
    }
  };

  // クリック時に開閉状態を判定する
  drawerBtn.addEventListener("click", () => {
    drawerPlug = !drawerPlug;
    headerIsActive();
  });

  // 画面上部がトリガー要素上部を通過したらtrue
  window.addEventListener("scroll", () => {
    const triggerTop = triggerItem.getBoundingClientRect().top; //画面上部からトリガー要素上部の距離を計算
    isTriggerPassed = triggerTop < 0;
    headerIsActive();
  });
};
