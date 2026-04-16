import { initializeHeaderBg } from "./component/header-bg.js";
import { initializeDrawerMenu } from "./component/drawer-menu.js";

window.addEventListener("load", () => {
  // 全ての初期化を実行
  initializeHeaderBg();
  initializeDrawerMenu();
});
