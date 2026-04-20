import { initializeHeaderBg } from "./component/header-bg.js";
import { initializeDrawerMenu } from "./component/drawer.js";
import { initializeServiceSlider } from "./slider/top-service-slider.js";
import { initializeTopVoiceSlider } from "./slider/top-voice-slider.js";

window.addEventListener("load", () => {
  // 全ての初期化を実行
  initializeHeaderBg();
  initializeDrawerMenu();
  initializeServiceSlider();
  initializeTopVoiceSlider();
});
