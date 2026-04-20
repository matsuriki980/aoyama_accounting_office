/*
 top-voice カルーセルスライダー
*/

export const initializeTopVoiceSlider = () => {
  const topVoiceSplide = document.querySelector(".top-voice__splide");
  const topVoiceSplideBtnPrev = document.querySelector(
    ".top-voice__splide-btn--prev",
  );
  const topVoiceSplideBtnNext = document.querySelector(
    ".top-voice__splide-btn--next",
  );

  if (!topVoiceSplide) return;

  const topVoiceSplideInstance = new Splide(topVoiceSplide, {
  });

  topVoiceSplideInstance.mount();

  // カスタム矢印で制御する
  topVoiceSplideBtnPrev.addEventListener("click", () => {
    topVoiceSplideInstance.go("<");
  });

  topVoiceSplideBtnNext.addEventListener("click", () => {
    topVoiceSplideInstance.go(">");
  });
};
