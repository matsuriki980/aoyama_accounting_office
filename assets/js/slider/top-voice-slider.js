/*
 top-voice カルーセルスライダー
*/

export const initTopVoiceSlider = () => {
  const topVoiceSwiper = document.querySelector(".top-voice__slider");

  if (!topVoiceSwiper) return;

  const mySwiper = new Swiper(topVoiceSwiper, {
    slidesPerView: 1.135,

    breakpoints: {
      900: {
        slidesPerView: 2.286,

        // ナビゲーションボタン
        navigation: {
          nextEl: ".top-voice__slider-btn--next",
          prevEl: ".top-voice__slider-btn--prev",
        },
      },
    },
  });
};
