import slick from "slick-carousel";
import $ from "jquery";

$(".review__slider").slick({
  arrows: true,
  nextArrow:
    '<a class="review__slider-arrow review__slider-next" ><img src="../static/img/icon/next.svg"/> </a>',
  prevArrow:
    '<a class="review__slider-arrow review__slider-prev" ><img src="../static/img/icon/prev.svg"/> </a>',
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  appendDots: $(".review__slider-control"),
  appendArrows: $(".review__slider-control"),

  responsive: [
    {
      breakpoint: 1199,
      settings: {
      slidesToShow: 2,
      },
    },
  ],
});
