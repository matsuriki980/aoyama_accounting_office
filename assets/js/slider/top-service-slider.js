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
    autoWidth: true,

    // pcではdragをfalseにし疑似的にスライダーを無効化
    drag: false,

    breakpoints: {
      900: {
        type: "loop",
        drag: true,
        perMove: "1",
      },
    },
  }).mount();
};
