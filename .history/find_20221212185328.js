"use strict";

const special = document.querySelector(".special");
const button = document.querySelector("button");
const $progressBar = document.querySelector(".progress-bar");

const onClick = () => {
  button.addEventListener("click", () => {
    special.scrollIntoView({ behavior: "smooth" });
  });
};
onClick();

const onScroll = () => {
  // 스크롤의 가장 윗 지점
  const scrollTop = document.documentElement.scrollTop;
  //스크롤의 총 길이 - 현재 시점
  const scrollHeightPoint =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // filled progress-bar percentage
  const progress = (scrollTop / scrollHeightPoint) * 100;
  $progressBar.style.width = progress + "%";

  console.log(progress);
};

// throttle
let timer;
const throttle = (callback, delay) => {
  if (timer) return;
  timer = setTimeout(() => {
    callback();
    timer = null || undefined;
  }, delay);
};

// debounce
const debounce = (callback, delay) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
};

window.addEventListener("scroll", () => throttle(onScroll, 100));
window.addEventListener("scroll", () => debounce(onScroll, 1000));
