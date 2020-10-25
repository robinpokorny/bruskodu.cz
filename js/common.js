"use strict";

var ready = function (fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

ready(function () {
  var $ = document.querySelector.bind(document);
  var $$ = document.querySelectorAll.bind(document);

  var onClick = function (el, fn) {
    el.addEventListener("click", fn, false);
    el.addEventListener("keydown", fn, false);
  };

  var scrollTopIcon = $(".top");

  onClick(scrollTopIcon, function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  var scrollTopShow = function () {
    scrollTopIcon.classList.add("is-active");
  };
  var scrollTopHide = function () {
    scrollTopIcon.classList.remove("is-active");
  };

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > screen.availHeight ||
      document.documentElement.scrollTop > screen.availHeight
    ) {
      scrollTopShow();
    } else {
      scrollTopHide();
    }
  });

  /* =============================
  // WOW Animation When You Scroll
  ============================= */
  var postImages = $$(".page img, .post img");

  [].forEach.call(postImages, function (img) {
    img.classList.add("wow", "fadeIn");
  });

  new WOW().init();
});
