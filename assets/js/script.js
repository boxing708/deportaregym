// ハンバーガーメニュー
const burger = document.querySelector("#header__burger");
const menu = document.querySelector("#header__menu");
const link = document.querySelectorAll(".header__item-link");

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-open");
  });
}
if (link) {
  menu.addEventListener("click", () => {
    burger.classList.remove("is-active");
    menu.classList.remove("is-open");
  });
}

$(function () {
  $(".slider")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, //自動再生
      autoplaySpeed: 4000, //自動再生のスピード
      speed: 3000, //スライドスピード
      slidesToShow: 1, //スライドの表示枚数
      fade: true, // フェードON
      arrows: false,
      cssEase: "linear", //スライドの動きを等速に
      pauseOnHover: false, //ホバーしても止まらないように
      pauseOnFocus: false, //フォーカスしても止まらないように
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
});

// 全体的にfadeup
const targets = document.querySelectorAll(".fadeup");

for (let i = targets.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("is-show");
        observer.unobserve(entries[j].target);
      }
    }
  });
  observer.observe(targets[i]);
}

//mv trialボタン　フッター直前で止める
// window.addEventListener("scroll", function () {
//   const scrollHeight = document.documentElement.scrollHeight;
//   const scrollPosition = window.innerHeight + window.scrollY;
//   const footHeight = document.querySelector(".footer").offsetHeight;
//   const mvButton = document.querySelector(".mv__button");

//   if (scrollHeight - scrollPosition <= footHeight) {
//     mvButton.style.position = "absolute";
//   } else {
//     mvButton.style.position = "fixed";
//   }
// });
