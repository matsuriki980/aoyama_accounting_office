/* 
 top-service カルーセルスライダー
*/

export const initializeServiceSlider = () => {
  const topServiceSplide = document.querySelector(".top-service__splide");

  if (!topServiceSplide) return;

  new Splide(topServiceSplide, {
    // 全デバイス共通
    arrows: false,
    pagination: false,
    drag: false,

    breakpoints: {
      900: {
        perPage: 1,
        drag: true,
        focus: 0,
        padding: { right: "12%" },
      },
    },
  }).mount();
};
