import { initializeHeaderBg } from "./component/header-bg.js";
import { initializeDrawerMenu } from "./component/drawer.js";
import { initContactCtaSlider } from "./component/contact-cta-slider.js";
import { initTopServiceSlider } from "./slider/top-service-slider.js";
import { initTopVoiceSlider } from "./slider/top-voice-slider.js";

window.addEventListener("load", () => {
  // 全ての初期化を実行
  initializeHeaderBg();
  initializeDrawerMenu();
  initContactCtaSlider();
  initTopServiceSlider();
  initTopVoiceSlider();
});
