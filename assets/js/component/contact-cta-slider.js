/*
  お問い合わせCTA スライダー
*/

export const initContactCtaSlider = () => {
  // 一番目のスライダー
  const contactCtaSliderPrimary = document.querySelector(
    ".l-contact-cta__slider--primary",
  );

  // 二番目のスライダー
  const contactCtaSliderSecondaryary = document.querySelector(
    ".l-contact-cta__slider--secondaryary",
  );

  if (!contactCtaSliderPrimary || !contactCtaSliderSecondaryary) return;

  const SwiperPrimary = new Swiper(contactCtaSliderPrimary, {
    spaceBetween: 8,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 0,
    },

    breakpoints: {
      487: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 24,
      },
      900: {
        direction: "vertical",
        slidesPerView: 3,
        reverseDirection: false,
        spaceBetween: 15,
      },
    },
  });

  // 2つ目のスライダー
  const mySwiperSecondaryary = new Swiper(contactCtaSliderSecondaryary, {
    spaceBetween: 8,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 0,
      reverseDirection: true,
    },

    breakpoints: {
      487: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 24,
      },
      900: {
        direction: "vertical",
        slidesPerView: 3,
        reverseDirection: false,
        spaceBetween: 15,
      },
    },
  });
};
