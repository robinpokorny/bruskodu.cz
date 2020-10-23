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

  /* =======================
  // Menu
  ======================= */
  var headerOverlay = $(".header__overlay");
  var menuOpenIcon = $(".nav__icon-menu");
  var menuCloseIcon = $(".nav__close");
  var menuList = $(".main-nav__box");

  var menuOpen = function () {
    menuList.classList.add("is-open");
    headerOverlay.classList.add("is-visible");
  };
  var menuClose = function () {
    menuList.classList.remove("is-open");
    headerOverlay.classList.remove("is-visible");
  };

  onClick(menuOpenIcon, menuOpen);

  onClick(menuCloseIcon, menuClose);

  onClick(headerOverlay, menuClose);

  /* =======================
  // Scroll Top Button
  ======================= 
  $(".top").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").classList.add("is-active");
    } else {
      $(".top").classList.remove("is-active");
    }
  });*/

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
