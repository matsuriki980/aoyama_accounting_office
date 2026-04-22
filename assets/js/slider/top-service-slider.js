/* 
 top-service カルーセルスライダー
*/
export const initTopServiceSlider = () => {
  const topServiceSwiper = document.querySelector(".top-service__slider");
  const media = window.matchMedia("(max-width: 900px)"); // デバイス幅を判定

  if (!topServiceSwiper) return;

  let mySwiper = null; // 生成したスライダーを入れる

  const handleSlider = () => {
    if (media.matches) {
      if (!mySwiper) {
        mySwiper = new Swiper(topServiceSwiper, {
          slidesPerView: 1.135,
        });
      }
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
        mySwiper = null;
      }
    }
  };

  handleSlider(); // 初回実行
  media.addEventListener("change", handleSlider); // 画面サイズが変化したら生成・削除処理を実行
};
